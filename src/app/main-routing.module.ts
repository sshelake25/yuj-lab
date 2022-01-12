import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailTemplatesComponent } from './email-templates/email-templates.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { SupportTicketComponent } from './support-ticket/support-ticket.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
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
    component: SupportTicketComponent
  },
  {
    path: 'templates',
    component: EmailTemplatesComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: '',
    component: HomeComponent
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
