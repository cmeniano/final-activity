import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean;
  constructor(private service: GlobalService, private router: Router) {this.isLogged = false; }

  ngOnInit(): void {
    console.log( this.service.isLogged);
    this.service.isLogged.subscribe(
   
      (logged: any) => {
        console.log('isLogged', logged);
        this.isLogged = logged;
      }
    );

     this.service.checkLogStatus();
  }

  onLogout(): void {
    this.service.deleteToken();
    Swal.fire(
      'Logged Out Successfully!',
      '',
      'success'
    )
    this.router.navigate(['/login', {}]);
  }

}
