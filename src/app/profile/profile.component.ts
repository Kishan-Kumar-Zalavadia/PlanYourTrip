import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { HotelsComponent } from '../hotels/hotels.component';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {NgbModal, ModalDismissReasons}  from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user=new User();
 
  constructor(private _registrationService: RegistrationService,  private _router: Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.user=this._registrationService.getUser()
  }

  home(){
    this._router.navigate(['/home/hotels'])
  }
  updateFlag=false;
  updateUser(){
    this._registrationService.updateUserDetailFromRemote(this.user).subscribe(
      data=>{console.log(data),this.updateFlag=true},
      error=>console.log(error)
    )
  }
  updatedUser(){
    return this.updateFlag
  }

  editFlag:boolean=false;
  editBtn(){
    this.editFlag=!this.editFlag;
  }

  statusFlag:boolean=false;

  msg=''
  
  enterReferral(code: String){
    this._registrationService.enterReferralCodeFromRemote(this.user,code).subscribe(
        data=>{
          console.log(data);
          if(data==true){
            this.statusFlag=true;
            this.msg="Referral Added";
          }
          else{
            this.msg="Invalid Referral"
          }
        },
        error=>console.log(error)
      )
  }
  isFriendCodeFlag:boolean=false;
  
  status(){
    console.log(this.statusFlag)
    return this.statusFlag;
  }

  checkReferralCodeExist(){
    if(this.user.friendCode==""){
      console.log(this.user.friendCode)
      return true;
    }
    else{
      console.log(this.user.friendCode)
      return false;
    }
  }

  referralCodeFlag:boolean=false;
  enterReferralCode(){
    this.referralCodeFlag=!this.referralCodeFlag
  }
  

}
