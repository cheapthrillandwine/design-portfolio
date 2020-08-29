import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: loadView('Home'),
    },
    {
      path: '/about',
      name: 'About',
      component: loadView('About'),
    },
    {
      path: '/thanq',
      name: 'ThanQ',
      component: loadView('ThanQ'),
    },
    {
      path: '/thanq/survey-top',
      name: 'SurveyTop',
      component: loadView('SurveyTop'),
    },
    {
      path: '/thanq/survey',
      name: 'SurveyList',
      component: loadView('SurveyList'),
    },
    {
      path: '/thanq/thanks',
      name: 'Thanks',
      component: loadView('Thanks'),
    },
  ],
});
