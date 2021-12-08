import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ProfileComponent } from './profile/profile.component';
import { ListProfileComponent } from './list-profile/list-profile.component';

@NgModule(
  {
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainContainerComponent,
    ProfileComponent,
    ListProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}
)
export class AppModule { }
