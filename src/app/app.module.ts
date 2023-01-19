import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './Pages/home/home.component';
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import { ProductosComponent } from './Pages/productos/productos.component';
import { ContactarComponent } from './Pages/contactar/contactar.component';
import { LoginComponent } from './Pages/login/login.component';

import { MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input'
import { MatCardModule} from '@angular/material/card'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule} from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import { MatTableModule} from '@angular/material/table';
import { EditComponent } from './Form/edit/edit.component';
import { NewComponent } from './Form/new/new.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { ServiciosComponent } from './Pages/servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    ProductosComponent,
    ContactarComponent,
    LoginComponent,
    EditComponent,
    NewComponent,
    NavbarComponent,
    FooterComponent,
    AdminComponent,
    ServiciosComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule,
    NgbModule, NgbCarouselModule, MatButtonModule,
    ReactiveFormsModule, MatInputModule,
    MatCardModule, MatToolbarModule, MatIconModule, 
    MatDialogModule, MatTableModule,FormsModule,NgbDropdownModule,
    NgbCollapseModule
  ],
  entryComponents: [LoginComponent],
  providers: [NgbCarouselConfig, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
