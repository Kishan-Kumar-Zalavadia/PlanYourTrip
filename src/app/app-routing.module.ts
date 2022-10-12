import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { FlightsComponent } from './flights/flights.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LoginComponent } from './login/login.component';
import { PackagesComponent } from './packages/packages.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { UsersComponent } from './users/users.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'home', component:HomeComponent, children: [
    {path: 'welcome', component: WelcomeComponent},
    {path: 'hotels', component: HotelsComponent},
    {path: 'flights', component: FlightsComponent},
    {path: 'packages', component: PackagesComponent},
    {path: 'users', component: UsersComponent}
  ]},
  {path: 'book', component: BookComponent},
  {path: 'updateHotel', component: UpdateHotelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
