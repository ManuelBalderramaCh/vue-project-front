import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import ProjectManagement from 'src/pages/ProjectManagement.vue'
import TableList from 'src/pages/TableList.vue'
import Icons from 'src/pages/Icons.vue'
import Notifications from 'src/pages/Notifications.vue'
import UsersList from 'src/pages/UsersList.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import CreateUser from 'src/pages/CreateUser.vue'
import CreateProject from 'src/pages/CreateProject.vue'


const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
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
        path: 'project',
        name: 'Project Management',
        component: ProjectManagement
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
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
        path: 'create-user',
        name: 'Create User',
        component: CreateUser
      },
      {
        path: 'create-project',
        name: 'Create Project',
        component: CreateProject
      }
    ]
  },
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
