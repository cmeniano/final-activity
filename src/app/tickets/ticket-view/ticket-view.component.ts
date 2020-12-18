import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.scss']
})
export class TicketViewComponent implements OnInit {

  ticket_info:any;
  selectedProduct: any;
  id :any;
  constructor(private service: GlobalService,   private router: ActivatedRoute, private _location: Location) { }

  ngOnInit(): void {
    this.service.httpGetTickets();
    this.service.onHttpGetTickets.subscribe(
      (info: any) => {
      
      this.ticket_info = info;
        console.log('test', this.ticket_info);
      }
    );


    this.router.params.subscribe(
      (params: Params) => {
        const id = params.id;
       
        this.id  = id;
      }
    )


  }

  goBack() {
    this._location.back();
}

}
