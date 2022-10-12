import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  userDetails:User[] = [];
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) { }

  
  //message = "Hey I am login"
  ngOnInit(): void {
    //this._service.setMessage(this.message)
  } 


  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log(data);
        this._service.setUser(data)
        this._router.navigate(['/home/hotels'])
      },
      error => {
        console.log("Excpetion occured");
        this.msg="Bad Credentials, please enter Valid emailid and password";
      }
    )
  }




  
}
