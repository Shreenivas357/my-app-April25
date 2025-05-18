import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { LogoutComponent } from './logout/logout.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployesComponent } from './employes/employes.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesComponent} from './vehicles/vehicles.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { PinterestGalleryComponent } from './pinterest-gallery/pinterest-gallery.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AuthenticationGuard } from './authentication.guard';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'databinding',component:DatabindingComponent},
    {path:'directives',component:DirectivesComponent}, 
    {path:'employes',component:EmployesComponent},
    {path:'products',component:ProductsComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'pinterestgallery',component:PinterestGalleryComponent},
    {path:'studentcard',component:StudentCardComponent},
    {path:'createuser',component:CreateUserComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'mail',component:MailComponent},
    {path:'weather',component:WeatherComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'login',component:LoginComponent},
    {path:'logout',component:LogoutComponent}
    
  ]},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
