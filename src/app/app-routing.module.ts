import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketsItemComponent } from './tickets/ticket-list/tickets-item/tickets-item.component';
import { TicketViewComponent } from './tickets/ticket-view/ticket-view.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TwoColumComponent } from './two-colum/two-colum.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';

const routes: Routes = [
 {
   path: '', component: TwoColumComponent ,children:[
    {path:'', component: HomeComponent}, 
    {path:'tickets', component: TicketListComponent, children:[
      {path:'', component: TicketsComponent},
      {path:'ticket-view/:id/view', component: TicketViewComponent},
      
      
    ]},
    {path:'my-profile', component: MyprofileComponent}
   ]
   
 },

//  {
//    path: 'my-profile', component: MyprofileComponent
//  },
 {
  path: 'login', component: LoginComponent
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  // {
  //   path: 'tickets', component: TicketsComponent
  // },
 {
   path: '**', component: NotFoundComponent
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
