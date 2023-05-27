import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BackendService } from './backend.service';
import { HttpClientModule } from '@angular/common/http';
import { AddformComponent } from './addform/addform.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OtpformComponent } from './otpform/otpform.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddformComponent,
    NavbarComponent,
    OtpformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
