import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/homepage/Homepage'
import Login from '@/components/login/Login'
import AnchorStation from '@/components/Navigation/AnchorStation'
import Discover from '@/components/Navigation/Discover'
import My from '@/components/Navigation/My'
import RankingList from '@/components/Navigation/RankingList'
import shelves from '@/components/Navigation/shelves'
import Singer from '@/components/Navigation/Singer'
import SongSheet from '@/components/Navigation/SongSheet'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/Homepage'
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/AnchorStation',
      name: 'AnchorStation',
      component: AnchorStation,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/Discover',
      name: 'Discover',
      component: Discover,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/My',
      name: 'My',
      component: My,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/RankingList',
      name: 'RankingList',
      component: RankingList,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/shelves',
      name: 'shelves',
      component: shelves,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/Singer',
      name: 'Singer',
      component: Singer,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/SongSheet',
      name: 'SongSheet',
      component: SongSheet,
      meta:{
        requireAuth:true
      }
    }
  ]
})
