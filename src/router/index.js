import { createRouter, createWebHistory } from 'vue-router'

import Beranda from '../views/beranda.vue'
import Sejarah from '../views/sejarah.vue'
import Koleksi from '../views/koleksi.vue'
import Info from '../views/info.vue'
import BukuTamu from '../views/bukutamu.vue'

const routes = [
  { path: '/', component: Beranda },
  { path: '/sejarah', component: Sejarah },
  { path: '/koleksi', component: Koleksi },
  { path: '/info', component: Info },
  { path: '/bukutamu', component: BukuTamu }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router