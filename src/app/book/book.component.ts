import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { HotelsComponent } from '../hotels/hotels.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  user = new User();
  hotel = new Hotel();

  constructor(private _registerService:RegistrationService, private _hotelService: HotelService,  private _router: Router) { }
 
  ngOnInit(): void {
    this.user=this._registerService.getUser()
    this.hotel=this._hotelService.getCurrentHotel()
  }
  bookFlag = false
  payment(){
    console.log(this.hotel, this.user)
    this._registerService.updateUserFromRemote(this.user,this.hotel.hotelName).subscribe(
      data=>{
        console.log(data)
        console.log("Booked Successfully")
        this.bookFlag=true
      },
      error=>{
        console.log("error")
      }
    ),
    this._hotelService.updateHotelFromRemote(this.hotel).subscribe(
      data=>console.log("Success"),
      error=>console.log("Success")
    )
  }
  booked(){
    return this.bookFlag
  }
  home(){
    this._router.navigate(['/home/hotels'])
  }
}
