import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
 tickets:any;
  total:any;
 isLogged: boolean;

test:any; 
  constructor(private service: GlobalService, private router: Router, private titleService:Title) { 
    this.isLogged = false;
    this.test =   ['test','test'];
    this.titleService.setTitle("Tickets");
  }

  ngOnInit(): void {

    this.service.isLogged.subscribe(
      (logged: any) => {
        console.log('tickets', logged);
        this.isLogged = logged;
      }
    );

    this.service.httpGetTickets();
    this.service.onHttpGetTickets.subscribe(
      (info: any) => {
        console.log('this is from tickets', info);
       this.tickets = info;
     this.total = this.tickets.length;

    if(!this.tickets.length){
            Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
      
      }
    );


  
  }

}
