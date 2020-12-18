import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isLogged: boolean;
  userInfo:any;
  constructor(private service: GlobalService, private router: Router, private titleService:Title) { this.isLogged = false;  this.titleService.setTitle("Home");}

  ngOnInit(): void {

    this.service.isLogged.subscribe(
      (logged: any) => {
        this.isLogged = logged;
      }
    );
    this.service.httpGetProfile();

                 
      this.service.onHttpGetProfile.subscribe(
        (profile: any) => {
          console.log('this is from my profile ts', profile);
          this.userInfo = profile;
        }
      );

      this.service.onHttpUpdateProfile.subscribe(
        (profile: any) => {

          this.userInfo = profile;
        }
      );

  }

}
