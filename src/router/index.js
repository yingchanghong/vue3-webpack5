import { createRouter, createWebHashHistory } from 'vue-router';
import pro from 'nprogress';
import 'nprogress/nprogress.css';
const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/login/login.vue'),
  },
  {
    path: '/create',
    name: 'create',
    component: () =>
      import(/* webpackChunkName: "create" */ '../views/create/create.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/login/register.vue'),
  },
  {
    path: '/login2',
    name: 'login2',
    component: () =>
      import(/* webpackChunkName: "login2" */ '../views/login/login2.vue'),
  },
  {
    path: '/index',
    name: 'Home',
    meta: {
      title: '首页',
    },
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    // redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () =>
          import(/* webpackChunkName: "index" */ '../views/index/index.vue'),
      },
      {
        path: '/roleManage',
        name: 'roleManage',
        component: () =>
          import(
            /* webpackChunkName: "rolemanage" */ '../views/RoleManage/RoleManage.vue'
          ),
      },
      {
        path: '/goodsManage',
        name: 'goodsManage',
        component: () =>
          import(
            /* webpackChunkName: "goodsmanage" */ '../views/goodsManage/goodsManage.vue'
          ),
      },
      {
        path: '/goodsmanage/detail',
        name: 'GoodsManageDetail',
        component: () =>
          import(
            /* webpackChunkName: "goodsmanage" */ '../views/goodsManage/detail.vue'
          ),
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach(async (to, from, next) => {
  pro.start();
  next();
});

router.afterEach((to, from) => {
  pro.done();
});
export default router;
