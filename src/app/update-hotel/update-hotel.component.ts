import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { HotelsComponent } from '../hotels/hotels.component';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html', 
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit {
  hotel = new Hotel();
  updateHotelDetail = new Hotel();
  constructor(private _hotelService: HotelService,  private _router: Router) { }

  ngOnInit(): void {
    this.hotel=this._hotelService.getCurrentHotel()
  }

  home(){
    this._router.navigate(['/home/hotels'])
  }

  updateFlag=false;
  updateHotel(){
    this._hotelService.updateHotelDetailFromRemote(this.hotel).subscribe(
      data=>{console.log(data),this.updateFlag=true},
      error=>console.log(error)
    )
  }
  updated(){
    return this.updateFlag
  }

}
