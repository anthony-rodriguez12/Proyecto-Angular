import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './Pages/home/home.component';
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import { LocalesComponent } from './Pages/locales/locales.component';
import { ProductosComponent } from './Pages/productos/productos.component';
import { ContactarComponent } from './Pages/contactar/contactar.component';
import { LoginComponent } from './Pages/login/login.component';

import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    LocalesComponent,
    ProductosComponent,
    ContactarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbCarouselModule,
    MatButtonModule, ReactiveFormsModule, MatInputModule, 
    MatCardModule, MatToolbarModule, MatIconModule, MatDialogModule, MatTableModule
  ],
  entryComponents: [LoginComponent],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
