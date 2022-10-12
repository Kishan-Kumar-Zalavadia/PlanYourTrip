import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from './hotel';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

 hotel = new Hotel()

  constructor(private http : HttpClient) { }

  public addHotelFromRemote(hotel : Hotel){
    return this.http.post("http://localhost:9292/addHotel",hotel)
  }

  public getHotel(){
    return this.http.get<Hotel[]>("http://localhost:9292/hotels")
  }

  public searchHotel(hotelCity: String){
    return this.http.get<Hotel[]>("http://localhost:9292/getHotelByCity/"+hotelCity)
  }

  public deleteHotel(hotel: Hotel){
    return this.http.delete<Hotel>("http://localhost:9292/delete/"+hotel.id)
  }

  public updateHotelFromRemote(hotel : Hotel):Observable<any>{
    const url="http://localhost:9292/updateRooms/"+hotel.id
    return this.http.put<any>(url,Hotel)
  }

  public updateHotelDetailFromRemote(hotel: Hotel):Observable<any>{
    const url2="http://localhost:9292/updateHotel/"+hotel.id
    return this.http.put<any>(url2,hotel)
  }
  

  public setCurretHotel(hotel : Hotel){ 
    this.hotel=hotel
  }
  public getCurrentHotel(){
    return this.hotel
  }

 

}
