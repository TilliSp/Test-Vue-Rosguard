import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Main from '@/views/Main.vue'
import Requests from '@/views/Requests.vue'
import Notes from '@/views/Notes.vue'
import Categories from '@/views/Categories.vue'
import Users from '@/views/Users.vue'
import Statistics from '@/views/Statistics.vue'
import Favorites from '@/views/Favorites.vue'
import Support from '@/views/Support.vue'
import KnowledgeBase from '@/views/KnowledgeBase.vue'
import Updates from '@/views/Updates.vue'
import Profile from '@/views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Main
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/requests',
      name: 'Requests',
      component: Requests
    },
    {
      path: '/notes',
      name: 'Notes',
      component: Notes
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    },
    {
      path: '/support',
      name: 'Support',
      component: Support
    },
    {
      path: '/knowledgeBase',
      name: 'KnowledgeBase',
      component: KnowledgeBase
    },
    {
      path: '/updates',
      name: 'Updates',
      component: Updates
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/generalSettings',
      name: 'GeneralSettings',
      component: () => import('../views/GeneralSettings.vue')
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: () => import('../views/Favorites.vue')
    },
  ]
})

export default router
