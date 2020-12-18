import { GlobalService } from '../services/global.service';
import { Component, OnInit } from '@angular/core';
import {Login} from '../pages/home/login-model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {Title} from "@angular/platform-browser";
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogged: boolean;
  logins: Login = {
    username: '',
    password: ''
  };

  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('')
  })

  get username(){return this.loginForm.get('username')};
  get password(){return this.loginForm.get('password')};

  constructor(private service: GlobalService, private router: Router,private titleService:Title) {
    
    this.isLogged = false;
    this.titleService.setTitle("Login");  
  }

  ngOnInit(): void {
    this.service.isLogged.subscribe(
      (logged: any) => {
        console.log('isLogged', logged);
        this.isLogged = logged;
      }
    );

    this.service.checkLogStatus();
  }

  onLogin(): void {
    this.service.httpLogin(this.logins);
   if(this.logins.password == '')
   {
    Swal.fire({
      title: 'Form Field is Required?',
      text: "Please Complete all Required Fields",
      icon: 'warning',
    })
   }
    this.service.onHttpLogin.subscribe(
      (response: any) => {
        const token = response.token;
        this.service.setToken(token);
        Swal.fire(
          'Logged In Successfully!',
          '',
          'success'
        )
        
        this.router.navigate(['my-profile', {}]);
      }
    );
  }
}
