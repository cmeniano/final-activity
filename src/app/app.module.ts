import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { GroupsComponent } from './pages/groups/groups.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TicketsComponent } from './tickets/tickets.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TwoColumComponent } from './two-colum/two-colum.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { TicketsItemComponent } from './tickets/ticket-list/tickets-item/tickets-item.component';
import { CommonModule } from '@angular/common';
import { TicketViewComponent } from './tickets/ticket-view/ticket-view.component';

// import { AboutUsComponent } from './about-us/about-us.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MyprofileComponent,
    NavComponent,
    NotFoundComponent,
    GroupsComponent,
    FooterComponent,
    LoginComponent,
    AboutUsComponent,
    TicketsComponent,
    SidebarComponent,
    TwoColumComponent,
    TicketListComponent,
    HomeContentComponent,
    TicketsItemComponent,
    TicketViewComponent,
    // AboutUsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
