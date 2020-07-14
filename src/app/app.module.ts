import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Módulos
import { PagesModule } from './pages/pages.module';

// Servicios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { FormsModule } from '@angular/forms';
import { ServiceModule } from './services/service.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
