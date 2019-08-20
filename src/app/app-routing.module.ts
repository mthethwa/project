import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { HairdresserProfileComponent } from './users/hairdresser-profile/hairdresser-profile.component';
import { SalonProfileComponent } from './users/salon-profile/salon-profile.component';
import { HomeComponent} from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = 
[
  {path: "",component:HomeComponent },
  {path: "hairdresser", component: HairdresserProfileComponent},
  {path: 'login', component: LoginComponent},
 {path: 'register', component: RegisterComponent},
  {path: "user", component: UserProfileComponent},
   {path: "salon", component: SalonProfileComponent},
  {path:"**", component:NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
