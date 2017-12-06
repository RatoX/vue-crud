import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import NewsList from '@/views/NewsList';
import NewsEdit from '@/views/NewsEdit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/news',
      name: 'News',
      component: NewsList,
      children: [{
        path: '/news/:id',
        name: 'NewsEdit',
        component: NewsEdit,
        props: true,
      }],
    },
  ],
});
