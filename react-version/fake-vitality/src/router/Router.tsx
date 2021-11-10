import { Suspense, lazy } from 'react';
import { useRouterTransition } from '@hooks/useRouterTransition';
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { DefaultRoute, IRoute, Routes } from './routes';
import LayoutWrapper from 'src/layouts/components/layout-wrapper';
import BlankLayout from 'src/layouts/BlankLayout';
import VerticalLayout from 'src/layouts/VerticalLayout';
import { LoadingSpinner } from 'src/components/spinner';
import { useIsAuthenticated } from "@azure/msal-react";

const Router = () => {
  // ** Hooks
  const [transition, setTransition] = useRouterTransition();

  // ** Layout
  const DefaultLayout = 'VerticalLayout';
  const Layouts = { BlankLayout, VerticalLayout }

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

  const NotAuthorized = lazy(() => import('@src/views/NotAuthorized'));
  const Error = lazy(() => import('@src/views/Error'));
  const isAuthenticated = useIsAuthenticated();

  const FinalRoute = props => {
    const route = props.route;
    if (
      (!isAuthenticated && route.meta === undefined) ||
      (!isAuthenticated && route.meta && !route.meta.authRoute)
    ) {
      return <Redirect to='/login' />
    } else if (route.meta && route.meta.authRoute && isAuthenticated) {
      return <Redirect to='/' />
    } else {
      return <route.component {...props} />
    }
  }

  // ** Return Route to Render
  const ResolveRoutes = () => {
    return Object.keys(Layouts).map((layout, index) => {
      const LayoutTag = Layouts[layout]

      const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout)

      return (
        <Route path={LayoutPaths} key={index}>
          <LayoutTag
            layout={layout}
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
                    render={props => (
                      <Suspense fallback={<LoadingSpinner />}>
                        <LayoutWrapper
                          layout={DefaultLayout}
                          transition={transition}
                          setTransition={setTransition}
                        >
                          <FinalRoute route={route} {...props} />
                        </LayoutWrapper>
                      </Suspense>
                    )}
                  />
                )
              })}
            </Switch>
          </LayoutTag>
        </Route>
      )
    })
  }

  // use BrowserRouter for web application and HashRouter for the Electron.
  const BaseRouter = props => {
    const { children, ...rest } = props;
    const userAgent = navigator.userAgent.toLowerCase();
    console.log(userAgent);
    const isElectron = userAgent.indexOf(' electron/') !== -1;
    return isElectron
      ? (<HashRouter {...rest}>{children}</HashRouter>)
      : (<BrowserRouter {...rest}>{children}</BrowserRouter>)
  };

  return (
    <BaseRouter basename={process.env.REACT_APP_BASENAME}>
      <Switch>
        <Route exact path='/' render={() => isAuthenticated ? <Redirect to={DefaultRoute} /> : <Redirect to='/login' />} />
        <Route exact path='/not-authorized' render={() => (<BlankLayout><NotAuthorized /></BlankLayout>)} />
        {ResolveRoutes()}
        <Route path='*' component={Error} />/
      </Switch>
    </BaseRouter>
  )
}

export default Router;
