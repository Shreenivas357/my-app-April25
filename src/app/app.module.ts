import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { EmployesComponent } from './employes/employes.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { PinterestGalleryComponent } from './pinterest-gallery/pinterest-gallery.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AccountsComponent } from './accounts/accounts.component';


@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    WelcomeComponent,
    DatabindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    LogoutComponent,
    DirectivesComponent,
    EmployesComponent,
    ProductsComponent,
    VehiclesComponent,
    FlipkartComponent,
    MailComponent,
    WeatherComponent,
    CreateVehicleComponent,
    PinterestGalleryComponent,
    StudentCardComponent,
    CreateUserComponent,
    AccountsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
