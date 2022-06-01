import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "@views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "login",
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/AboutView.vue"),
  },
  {
    path: "/intro",
    name: "Intro",
    component: () => lazyLoadView(import("./views/IntroView.vue")),
  },
  {
    path: "/table-exam",
    name: "TableExam",
    component: () => lazyLoadView(import("./views/TableExam.vue")),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@views/TestView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("./views/LoginView.vue"),
    meta: {
      layout: "login",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@views/Register.vue"),
    meta: {
      layout: "login",
    },
  },
  {
    path: "/error-404",
    name: "error-404",
    component: () => import("@views/Error.vue"),
    meta: {
      layout: "blank",
    },
  },
  {
    path: "*",
    redirect: "error-404",
  },
]

function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    // loading: require("@views/_loading.vue").default,
    delay: 400,
    // error: require("@views/_timeout.vue").default,
    timeout: 10000,
  })
  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      // 모든 props 와 children 을 투명하게 pass
      return h(AsyncHandler, data, children)
    },
  })
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
