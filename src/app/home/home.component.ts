import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
}) 
export class HomeComponent implements OnInit {

  user = new User();
  userDetails:User[] = [];
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) { 
    
  }

  //message:String=""
  adminFlag = false;
  ngOnInit(): void {
    //this.message=this._service.getMessage()
    this.user=this._service.getUser()
    if(this.user.userName=="Admin"){
      this.adminFlag=true;
    }
  }
  admin(){
    return this.adminFlag;
  } 
  logout(){
    console.log("Logout")
  }



}
