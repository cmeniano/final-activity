import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  
  title = 'Tickets';
  @Input() isLogged:boolean;
  constructor(private service: GlobalService, private router: Router) { this.isLogged = false;}

  ngOnInit(): void {


    
  }

}
