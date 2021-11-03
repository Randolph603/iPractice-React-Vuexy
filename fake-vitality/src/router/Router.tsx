import { Suspense, lazy } from 'react';

// ** Utils
import { useLayout } from '@hooks/useLayout';
import { useRouterTransition } from '@hooks/useRouterTransition';

// ** Router Components
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom';

// ** Routes & Default Routes
import { DefaultRoute, IRoute, Routes } from './routes';

// ** Layouts & Components
import LayoutWrapper from 'src/layouts/components/layout-wrapper';
import BlankLayout from 'src/layouts/BlankLayout';
import VerticalLayout from 'src/layouts/VerticalLayout';
import HorizontalLayout from 'src/layouts/HorizontalLayout';
import { LoadingSpinner } from 'src/components/spinner';
import { isUserLoggedIn } from 'src/utility/Utils';

const Router = () => {
  // ** Hooks
  const [layout, setLayout] = useLayout()
  const [transition, setTransition] = useRouterTransition()

  // ** Default Layout
  const DefaultLayout = layout === 'horizontal' ? 'HorizontalLayout' : 'VerticalLayout'

  // ** All of the available layouts
  const Layouts = { BlankLayout, VerticalLayout, HorizontalLayout }

  // ** Current Active Item
  const currentActiveItem = null

  // ** Return Filtered Array of Routes & Paths
  const LayoutRoutesAndPaths = layout => {
    const LayoutRoutes: IRoute[] = []
    const LayoutPaths: string[] = []

    if (Routes) {
      Routes.forEach(route => {
        // ** Checks if Route layout or Default layout matches current layout
        if (route.layout === layout || (route.layout === undefined && DefaultLayout === layout)) {
          LayoutRoutes.push(route)
          LayoutPaths.push(route.path)
        }
      })
    }

    return { LayoutRoutes, LayoutPaths }
  }

  const NotAuthorized = lazy(() => import('@src/views/NotAuthorized'))

  // ** Init Error Component
  const Error = lazy(() => import('@src/views/Error'))

  // ** Return Route to Render
  const ResolveRoutes = () => {
    return Object.keys(Layouts).map((layout, index) => {
      // ** Convert Layout parameter to Layout Component
      // ? Note: make sure to keep layout and component name equal

      const LayoutTag = Layouts[layout]

      // ** Get Routes and Paths of the Layout
      const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout)

      // ** We have freedom to display different layout for different route
      // ** We have made LayoutTag dynamic based on layout, we can also replace it with the only layout component,
      // ** that we want to implement like VerticalLayout or HorizontalLayout
      // ** We segregated all the routes based on the layouts and Resolved all those routes inside layouts

      // ** RouterProps to pass them to Layouts
      const routerProps = {}

      return (
        <Route path={LayoutPaths} key={index}>
          <LayoutTag
            routerProps={routerProps}
            layout={layout}
            setLayout={setLayout}
            transition={transition}
            setTransition={setTransition}
            currentActiveItem={currentActiveItem}
          >
            <Switch>
              {LayoutRoutes.map(route => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact === true}
                    render={props => {
                      // ** Assign props to routerProps
                      Object.assign(routerProps, {
                        ...props,
                        meta: route.meta
                      })

                      return (
                        <Suspense fallback={<LoadingSpinner />}>
                          {/* Layout Wrapper to add classes based on route's layout, appLayout and className */}
                          <LayoutWrapper
                            layout={DefaultLayout}
                            transition={transition}
                            setTransition={setTransition}
                            /* Conditional props */
                            {...(route.appLayout
                              ? {
                                appLayout: route.appLayout
                              }
                              : {})}
                            {...(route.meta
                              ? {
                                routeMeta: route.meta
                              }
                              : {})}
                            {...(route.className
                              ? {
                                wrapperClass: route.className
                              }
                              : {})}
                          >
                            <route.component {...props} />
                          </LayoutWrapper>
                        </Suspense>
                      )
                    }}
                  />
                )
              })}
            </Switch>
          </LayoutTag>
        </Route>
      )
    })
  }

  return (
    <AppRouter basename={process.env.REACT_APP_BASENAME}>
      <Switch>
        <Route exact path='/' render={() => !isUserLoggedIn() ? <Redirect to={DefaultRoute} /> : <Redirect to='/login' />} />
        <Route exact path='/not-authorized' render={() => (<BlankLayout><NotAuthorized /></BlankLayout>)} />
        {ResolveRoutes()}
        <Route path='*' component={Error} />/
      </Switch>
    </AppRouter>
  )
}

export default Router;
