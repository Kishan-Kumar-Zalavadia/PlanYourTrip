import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http'
import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // message: String=""
  // setMessage(data: String){
  //   this.message=data;
  // }
  // getMessage(){
  //   return this.message;
  // } 

  //Send User data
  user = new User();
  setUser(user: User){
    this.user=user;
  }
  getUser(){
    return this.user;
  }


  constructor( private _http : HttpClient ) { }
 
  public loginUserFromRemote(user : User):Observable<any>{
    return this._http.post<any>("http://localhost:9292/login",user)
  }

  public registraterUserFromRemote(user : User):Observable<any>{
    return this._http.post<any>("http://localhost:9292/registerUser",user)
  }

  public updateUserFromRemote(user: User, hotelBooked:String):Observable<any>{
    console.log(user.id+"/"+hotelBooked)
    const url="http://localhost:9292/update/"+user.id+"/"+hotelBooked
    return this._http.put<any>(url,User);
  }

}