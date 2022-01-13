import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailTemplatesComponent } from './email-templates/email-templates.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { SupportTicketComponent } from './support-ticket/support-ticket.component';
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
    canActivate: [AuthGuard]
  },
  {
    path: 'templates',
    component: EmailTemplatesComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'support-panel',
    loadChildren: () => import('./support-panel/support-panel.module')
      .then(m => m.SupportPanelModule)
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
