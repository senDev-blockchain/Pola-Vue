/*
 * Copyright (c) 2020. dibuat Oleh Tama Asrory Ridhana, S.T, MTA.
 * Lisensi ini hanya diberikan dan tidak dapat di perjual belikan kembali tanpa izin pembuat
 */
import SuratKeluar from '@/router/menus/surat-keluar'
import Agenda from '@/router/menus/agenda'
import TemplateSurat from '@/router/menus/template-surat'
import Profil from '@/router/menus/profil'
import User from '@/router/menus/user'
import Roles from '@/router/menus/roles'
import PolaKarir from './menus/pola-karir'

const menus = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about.chunk" */ '@/views/Home'),
    meta: {
      title: 'Dashboard',
      icon: 'mdi-home',
      requirePermission: 'home',
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login.chunk" */ '@/views/Login'),
    meta: {
      title: 'Login'
    }
  },
  {
    path: '*',
    name: 'not_found',
    component: () => import(/* webpackChunkName: "about.chunk" */ '@/views/NotFound'),
    meta: {
      title: 'Not Found'
    }
  }
]

export default menus.concat(
  User,
  Roles,
  PolaKarir,
  SuratKeluar,
  Agenda,
  Profil,
  TemplateSurat

)
