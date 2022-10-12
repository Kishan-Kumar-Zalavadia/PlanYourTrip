import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user = new User()
  userDetails:User[] =[]

  constructor(private _usersService : UsersService) { }

  ngOnInit(): void {
    this.getUsersDetails()
  }
  getUsersDetails(){
    this._usersService.getUser().subscribe(
      data => {
        console.log(data);
        this.userDetails=data;
      },
      error =>{
        console.log(error);
      }
    )
  }

}
