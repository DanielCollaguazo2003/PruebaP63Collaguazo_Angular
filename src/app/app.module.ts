import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PrincipalComponent } from './pages/principal/principal.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
