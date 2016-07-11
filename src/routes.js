// import Index from './containers/routes/Index';
// import Self from './containers/routes/Self';
import App from './containers/App';
import Demo from './containers/Demo';

const routes = [
  {
    path: '/yo',
    component: App
    // childRoutes: [
    //   { path: 'example',
    //     component: Index
    //   },
    //   { path: 'example/self',
    //     component: Self
    //   }
    // ]
  },
  {
    path: '/demo',
    component: Demo
  }
];

export default routes;
