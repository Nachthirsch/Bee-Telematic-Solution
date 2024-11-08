import { lazy } from 'react';

const routes = {
  main: [
    {
      path: '/',
      component: lazy(() => import('../pages/home')),
    },
    {
      path: '/about_us',
      component: lazy(() => import('../pages/about_us')),
    },
    {
      path: '/portofolio',
      component: lazy(() => import('../pages/portofolio')),
    },
    {
      path: '/contact',
      component: lazy(() => import('../pages/contact')),
    }
  ],
  services: [
    {
      path: '/services',
      component: lazy(() => import('../pages/services')),
    },
    {
      path: '/services/custom-software-development',
      component: lazy(() => import('../pages/services/csd')),
    },
    {
      path: '/services/mobile-app-development',
      component: lazy(() => import('../pages/services/mad')),
    },
    {
      path: '/services/web-application-development',
      component: lazy(() => import('../pages/services/wad')),
    },
    {
      path: '/services/ui-ux-design',
      component: lazy(() => import('../pages/services/ux')),
    },
    {
      path: '/services/enterprise-software',
      component: lazy(() => import('../pages/services/esd')),
    },
    {
      path: '/services/system-integration',
      component: lazy(() => import('../pages/services/si')),
    },
    {
      path: '/services/software-maintenance',
      component: lazy(() => import('../pages/services/sms')),
    },
    {
      path: '/services/it-consultation',
      component: lazy(() => import('../pages/services/kitd')),
    },
    {
      path: '/services/cloud-development',
      component: lazy(() => import('../pages/services/cbsd')),
    },
    {
      path: '/services/testing-qa',
      component: lazy(() => import('../pages/services/tqa')),
    }
  ]
};

export default routes;
