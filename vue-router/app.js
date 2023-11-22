import Home from './components/Home.js'
import Profile from './components/Profile.js'
import NotFound from './components/NotFound.js'
import Settings from './components/Settings.js'
import PersonalInfo from './components/PersonalInfo.js'
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        navbar: NavBar,
        footer: Footer,
      },
    },
    {
      path: '/profile/:id',
      component: Profile,
      name: 'profile',
      props: true,
      children: [
        { path: '', component: PersonalInfo },
        { path: 'setting', component: Settings },
        { path: 'personal-info', component: PersonalInfo },
      ],
    },
    { path: '*', component: NotFound },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.name != 'home') {
    next({ name: 'home' })
  }
  next()
})

new Vue({
  el: '#app',
  data: {
    id: 5,
    x: 12,
  },
  template: `<div>
  <router-link to='/'> Home </router-link>
  <router-link :to="{name:'profile', params: {id: id}}"> Profile </router-link>
  <router-view name='navbar'></router-view>
  <router-view name='footer'></router-view>
  <router-view></router-view>
  </div>`,
  router,
})
