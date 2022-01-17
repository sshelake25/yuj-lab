import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailTemplatesComponent } from './email-templates/email-templates.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DataFetchService } from './modules/support-panel/services/data-fetch.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { SupportTicketComponent } from './support-ticket/support-ticket.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'admin',
      title: 'This only for user',
      anyData: []
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'ticket',
    component: SupportTicketComponent,
    // canActivate: [AuthGuard]
  },

  {

    path: 'templates',
    component: EmailTemplatesComponent,
    // outlet: 'sidebar'
  },

  {
    path: 'users', // user/details has to provider place to added view of child
    component: UsersComponent, // in .html of this <router-outlet>
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'details/:myIdentifier',
        component: UserDetailsComponent
      },
      {
        path: 'prev', //users/prev
        component: ProfileComponent
      }
    ]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'support-panel',
    loadChildren: () => import('./modules/support-panel/support-panel.module')
      .then(m => m.SupportPanelModule),

    resolve: {
      allUserFromResolve: DataFetchService,
      // anothoerData : Ano
    }
  },
  {
    path: 'admin-panel',
    loadChildren: () => import('./modules/admin-panel/admin-panel.module').then(data => data.AdminPanelModule)
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
