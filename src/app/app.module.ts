import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


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
import { NotificationManagerComponent } from './notification-manager/notification-manager.component';
import { EmailTemplatesComponent } from './email-templates/email-templates.component';
import { UsersComponent } from './users/users.component';
import { DemoInterceptor } from './interceptors/demo.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MainRoutingModule } from './main-routing.module';
import { AdminPanelModule } from './admin-panel/admin-panel.module';


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
    TruncatePipe,
    NotificationManagerComponent,
    EmailTemplatesComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(
    //   appRoutes,
    //   // { enableTracing: true } // <-- debugging purposes only
    // ),
    MainRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, //for reactive form to use
    FormsModule,
    BrowserAnimationsModule, //tempdrive form,
    MaterialModule,
    //AdminPanelModule // should have to remove if want to load as lazy loaded module
  ],
  providers: [
    ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DemoInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
