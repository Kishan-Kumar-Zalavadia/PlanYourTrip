import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotel = new Hotel();
  searchHotel = ""
  searchHotelList:Hotel[] =[];
  hotelDetails:Hotel[] = [];
  user = new User();


  constructor(private _service : HotelService, private service:RegistrationService,  private _router: Router) {
    this.gethotelsDetails();
   }

  adminFlag = false;
  ngOnInit(): void {
    this.user=this.service.getUser()
    if(this.user.userName=="Admin"){
      this.adminFlag=true;
    }
  }
  admin(){
    return this.adminFlag;
  }


  addHotel(){
    this._service.addHotelFromRemote(this.hotel).subscribe(
      data=>{
        console.log(data);
        this.gethotelsDetails();
      },
      errror=>{
        console.log("Error");
      }
    )
  }

  gethotelsDetails(){
    this._service.getHotel().subscribe(
      data => {
        console.log(data);
        this.hotelDetails=data;
      },
      error =>{
        console.log(error);
      }
    )
  }

  getDetail(hotel: Hotel, user: User){
    this._service.setCurretHotel(hotel);
  }

  flag=true;
  lengthFlag=false;
  hotelDetailFlag(){
    return this.flag;
  }
  
  lengthFlagPrint(){
    return this.lengthFlag
  }

  searchHotelDetails(){
    this._service.searchHotel(this.searchHotel).subscribe(
      data => {
        this.flag=false;
        this.searchHotelList = data;
        console.log(data);
        this.lengthFlag=false;
        if(data.length==0){
          console.log("No Hotel Found")
          this.flag=true
          this.lengthFlag=true;
        }
      },
      error =>{
        this.flag=true;
        console.log(error);
      }
    )
  }
  

  deleteHotel(hotel: Hotel){
    console.log(hotel)
    this._service.deleteHotel(hotel).subscribe(
      data=>{
        console.log(data)
        this._router.navigate(['/home/hotels'])
      },
      error=>{
        console.log(error)
      }
    )
  }

  updateHotel(hotel: Hotel){
    console.log(hotel)
    console.log("Update")
    this._service.setCurretHotel(hotel)
    this._router.navigate(['/updateHotel'])
  }

  rooms(hotel:Hotel){
    if(hotel.hotelRooms>0)
    return true
    return false
  }

}

 