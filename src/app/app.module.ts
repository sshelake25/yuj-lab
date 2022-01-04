import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ProfileComponent } from './profile/profile.component';
import { ListProfileComponent } from './list-profile/list-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductService } from './services/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupportTicketComponent } from './support-ticket/support-ticket.component';
import { PriceComponent } from './price/price.component';
import { UsageComponent } from './usage/usage.component';
import { RxUsageComponent } from './rx-usage/rx-usage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';

import { MaterialModule } from './meterial.modules';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { ReadTimeDirective } from './directives/read-time.directive';
import { ScrollToDirective } from './directives/scroll-to.directive';
import { DemoPipe } from './pipes/demo.pipe';
import { AvatarPipe } from './pipes/avatar.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';


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
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainContainerComponent,
    ProfileComponent,
    ListProfileComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    SupportTicketComponent,
    PriceComponent,
    UsageComponent,
    RxUsageComponent,
    DialogComponent,
    HighlightDirective,
    UnlessDirective,
    ReadTimeDirective,
    ScrollToDirective,
    DemoPipe,
    AvatarPipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    ReactiveFormsModule, //for reactive form to use
    FormsModule,
    BrowserAnimationsModule, //tempdrive form,
    MaterialModule,
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
