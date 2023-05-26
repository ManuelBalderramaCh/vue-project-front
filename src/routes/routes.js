import DashboardLayout from '../layout/DashboardLayout.vue'
import NotFound from '../pages/NotFoundPage.vue'

import Overview from 'src/pages/Overview.vue'
import ProjectManagement from 'src/pages/ProjectManagement.vue'
import TableList from 'src/pages/TableList.vue'
import Icons from 'src/pages/Icons.vue'
import Notifications from 'src/pages/Notifications.vue'
import UsersList from 'src/pages/UsersList.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import CreateUser from 'src/pages/CreateUser.vue'
import CreateProject from 'src/pages/CreateProject.vue'
import LoginPage from 'src/pages/LoginPage.vue'
import CreateTask from 'src/pages/CreateTask.vue'
import EditTask from 'src/pages/EditTask.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/login'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'project/:id',
        name: 'Project Management',
        component: ProjectManagement
      },
      {
        path: 'user/:id',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'task/:id',
        name: 'EditTask',
        component: EditTask
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'users',
        name: 'UsersList',
        component: UsersList
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'create-project',
        name: 'Create Project',
        component: CreateProject
      },
      {
        path: 'create-task',
        name: 'Create Task',
        component: CreateTask
      },
    ]
  },
  {
    path: '/create-user',
    name: 'Create User',
    component: CreateUser
  },
  { path: '/login', component: LoginPage },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
