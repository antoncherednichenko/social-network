
const profileChildren = [
  {
    path: 'me',
    name: 'Me',
    component: () => import('@/views/profileViews/MeView.vue')
  },
  {
    path: 'dialogs',
    name: 'Dialogs',
    component: () => import('@/views/profileViews/DialogsView.vue')
  },
  {
    path: 'users',
    name: 'Users',
    component: () => import('@/views/profileViews/UsersView.vue')
  },
  {
    path: 'news',
    name: 'News',
    component: () => import('@/views/profileViews/NewsView.vue')
  }
]

export default profileChildren

