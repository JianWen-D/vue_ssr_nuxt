import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _3b5f28be = () => import('../pages/reading/index.vue' /* webpackChunkName: "pages/reading/index" */).then(m => m.default || m)
const _ab5d8bb2 = () => import('../pages/camps/index.vue' /* webpackChunkName: "pages/camps/index" */).then(m => m.default || m)
const _70db29e2 = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _1e5f10ab = () => import('../pages/faq/index.vue' /* webpackChunkName: "pages/faq/index" */).then(m => m.default || m)
const _1f9a954c = () => import('../pages/production/index.vue' /* webpackChunkName: "pages/production/index" */).then(m => m.default || m)
const _453b9090 = () => import('../pages/student/index.vue' /* webpackChunkName: "pages/student/index" */).then(m => m.default || m)
const _584f9512 = () => import('../pages/teacher/index.vue' /* webpackChunkName: "pages/teacher/index" */).then(m => m.default || m)
const _1ee2cd8e = () => import('../pages/teacher/register.vue' /* webpackChunkName: "pages/teacher/register" */).then(m => m.default || m)
const _ef7c3bda = () => import('../pages/teacher/apply.vue' /* webpackChunkName: "pages/teacher/apply" */).then(m => m.default || m)
const _07e03164 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/reading",
			component: _3b5f28be,
			name: "reading"
		},
		{
			path: "/camps",
			component: _ab5d8bb2,
			name: "camps"
		},
		{
			path: "/about",
			component: _70db29e2,
			name: "about"
		},
		{
			path: "/faq",
			component: _1e5f10ab,
			name: "faq"
		},
		{
			path: "/production",
			component: _1f9a954c,
			name: "production"
		},
		{
			path: "/student",
			component: _453b9090,
			name: "student"
		},
		{
			path: "/teacher",
			component: _584f9512,
			name: "teacher"
		},
		{
			path: "/teacher/register",
			component: _1ee2cd8e,
			name: "teacher-register"
		},
		{
			path: "/teacher/apply",
			component: _ef7c3bda,
			name: "teacher-apply"
		},
		{
			path: "/",
			component: _07e03164,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
