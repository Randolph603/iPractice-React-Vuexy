import BreadCrumbs from '@src/components/breadcrumbs'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Col, Row } from 'reactstrap'
import { Home, Star, Link as LinkIcon } from 'react-feather'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'

const Vue = () => {
  return (
    <>
      <BreadCrumbs breadCrumbTitle={(<Home size={20} />)} breadCrumbParent='Fake Vitality' breadCrumbActive={(<Link to='/vue'>Vue JS</Link>)} />

      <Card>
        <CardHeader>
          <CardTitle tag="h4">🚀 Vue JS  </CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            Vue JS is a framework between React and Angular. It borrow a lot idea from React and Angular.
            Loved for its small size, speed and flexibility, Vue.js delivers even better performance compared to other frontend frameworks.
            It seems Vue has differnt ecosystem from <CardLink href='https://gitee.com/' target="_blank">Gitee</CardLink>. There is log components and project than github.
            Due to its personal developer has chinese backgrand, However, most of mandarin documentation is not translated in time making it not such user-friendly.
          </CardText>
          <CardText>
            It might be not suitble for Vulcan but still greate to have look.
          </CardText>
          <hr />
          <Row>
            <Col md='5' sm='12'>
              <CardTitle tag='h4'>Keypoints</CardTitle>
              <CardText>Defacto standard for building applications : <CardLink href='https://cli.vuejs.org/guide/cli-service.html' target="_blank">Vue CLI</CardLink></CardText>
              <CardText>Developed By: <CardLink href='https://evanyou.me/' target="_blank">Evan You</CardLink>(and a team to maintain)</CardText>
              <CardText>Initial Release: Feburary 2014</CardText>
              <CardText>Data Binding: two-way</CardText>
              <CardText>DOM: Virtual</CardText>
            </Col>
            <Col md='3' sm='12'>
            <CardTitle tag='h4'>Personal Rating</CardTitle>
              <h6>Easy to start: <Rating
                emptySymbol={<Star size={16} fill='#babfc7' stroke='#babfc7' />}
                fullSymbol={<Star size={16} fill='#ff9f43' stroke='#ff9f43' />}
                readonly
                initialRating={4}
                direction={'ltr'}
              /> 4 Stars</h6>
              <h6>Community: <Rating
                emptySymbol={<Star size={16} fill='#babfc7' stroke='#babfc7' />}
                fullSymbol={<Star size={16} fill='#ff9f43' stroke='#ff9f43' />}
                readonly
                initialRating={2.5}
                direction={'ltr'}
              /> 3 Stars</h6>
              <h6>Popularity: <Rating
                emptySymbol={<Star size={16} fill='#babfc7' stroke='#babfc7' />}
                fullSymbol={<Star size={16} fill='#ff9f43' stroke='#ff9f43' />}
                readonly
                initialRating={3}
                direction={'ltr'}
              /> 3 Stars</h6>
              <h6>Performance: <Rating
                emptySymbol={<Star size={16} fill='#babfc7' stroke='#babfc7' />}
                fullSymbol={<Star size={16} fill='#ff9f43' stroke='#ff9f43' />}
                readonly
                initialRating={5}
                direction={'ltr'}
              /> 5 Stars</h6>
              <h6>Overall: <Rating
                emptySymbol={<Star size={16} fill='#babfc7' stroke='#babfc7' />}
                fullSymbol={<Star size={16} fill='#ff9f43' stroke='#ff9f43' />}
                readonly
                initialRating={3.5}
                direction={'ltr'}
              /> 3.5 Stars</h6>
            </Col>
            <Col md='4' sm='12'>
              <CardTitle tag='h4'>Sample Project</CardTitle>
              <CardText>
                Vue.js 3 project support MSAL 2.0 (<CardLink href='https://vulcansteel.visualstudio.com/Vitality/_git/Exp-Randolph?path=/vue-version' target="_blank">Link <LinkIcon size={16} /></CardLink>)
              </CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle><h4>🔒 Authentication MSAL </h4></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText> According to Microsoft tutorial{' '}
            <CardLink href='https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-javascript-auth-code' target="_blank">
              JavaScript SPA using MSAL
            </CardLink>,
          </CardText>
          <CardText> "@azure/msal-browser" </CardText>
          <CardText>Directly create instance of 'PublicClientApplication'</CardText>
          <pre>
            <code className='language-ts'>
              {`
import { AccountInfo, InteractionStatus, PublicClientApplication } from "@azure/msal-browser";
import { getCurrentInstance, Ref, toRefs } from "vue";

export type MsalContext = {
    instance: PublicClientApplication,
    accounts: Ref<AccountInfo[]>,
    inProgress: Ref<InteractionStatus>
}

export function useMsal(): MsalContext {
    const internalInstance = getCurrentInstance();
    if (!internalInstance) {
        throw "useMsal() cannot be called outside the setup() function of a component";
    }
    const { instance, accounts, inProgress} = toRefs(internalInstance.appContext.config.globalProperties.$msal);

    if (!instance || !accounts || !inProgress) {
        throw "Please install the msalPlugin";
    }

    if (inProgress.value === InteractionStatus.Startup) {
        instance.value.handleRedirectPromise().catch(() => {
            // Errors should be handled by listening to the LOGIN_FAILURE event
            return;
        });
    }

    return {
        instance: instance.value,
        accounts,
        inProgress
    }
}
`}
            </code>
          </pre>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle><h4>🚦 Router </h4></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>Similar to React, Vue use 'vue-router' lib for router management</CardText>
          <CardText>"vue-router": "^4.0.11"</CardText>
          <pre>
            <code className='language-ts'>
              {`
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import ProfileNoGuard from '../views/ProfileNoGuard.vue';
import Failed from "../views/Failed.vue";
import { registerGuard } from "./Guard";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/profileNoGuard',
    name: 'ProfileNoGuard',
    component: ProfileNoGuard
  },
  {
    path: '/failed',
    name: 'Failed',
    component: Failed
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

registerGuard(router);

export default router;
`}
            </code>
          </pre>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle><h4>☕ State Management </h4></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            Similar to React's Redux, <CardLink href='https://vuex.vuejs.org/' target="_blank">Vuex</CardLink>, is the one to manage state for Vue.
          </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle><h4>🍳 Theme & UI Framework </h4></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            <CardLink href='https://vuetifyjs.com/en/' target="_blank">Vuetify</CardLink> is a Vue UI Library with beautifully handcrafted Material Components.
          </CardText>
        </CardBody>
      </Card>
    </>
  )
}

export default Vue
