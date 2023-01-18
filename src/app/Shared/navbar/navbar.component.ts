import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{
  ruta = '';
  user: any;
  constructor(private router: Router,  private cookies:CookieService) {
    try {
      this.user = this.cookies.get("Data");
      this.user = JSON.parse(this.user);
    } catch (error) {
      this.user = {
        usuario:'Perfil',
      }
    }
  }

  rutas = [
    {home:'sd'},
    {contactar:''},
    {locales:''},
    {nosotros:''},
    {productos:''},
    {login:''}
  ]
  

  nav(){
    let x:string = this.router.url
    console.log(x)
    switch (x) {
      case "/home":
          this.rutas[0].home = 'text-secondary';
          this.rutas[0].contactar = 'text-white'
          this.rutas[0].locales = 'text-white'
          this.rutas[0].nosotros = 'text-white'
          this.rutas[0].productos = 'text-white'
          this.rutas[0].login = 'text-white'

          console.log(this.rutas[0].home)
        break;
      case "/contactar":
          this.rutas[0].home = 'text-white';
          this.rutas[0].contactar = 'text-secondary'
          this.rutas[0].locales = 'text-white'
          this.rutas[0].nosotros = 'text-white'
          this.rutas[0].productos = 'text-white'
          this.rutas[0].login = 'text-white'
        break;
      case "/locales":
          this.rutas[0].home = 'text-white';
          this.rutas[0].contactar = 'text-white'
          this.rutas[0].locales = 'text-secondary'
          this.rutas[0].nosotros = 'text-white'
          this.rutas[0].productos = 'text-white'
          this.rutas[0].login = 'text-white'
        break;
      case "/nosotros":
          this.rutas[0].home = 'text-white';
          this.rutas[0].contactar = 'text-white'
          this.rutas[0].locales = 'text-white'
          this.rutas[0].nosotros = 'text-secondary'
          this.rutas[0].productos = 'text-white'
          this.rutas[0].login = 'text-white'
        break;
      case "/productos":
          this.rutas[0].home = 'text-white';
          this.rutas[0].contactar = 'text-white'
          this.rutas[0].locales = 'text-white'
          this.rutas[0].nosotros = 'text-white'
          this.rutas[0].productos = 'text-secondary'
          this.rutas[0].login = 'text-white'
        break;
      case "/login":
          this.rutas[0].home = 'text-white';
          this.rutas[0].contactar = 'text-white'
          this.rutas[0].locales = 'text-white'
          this.rutas[0].nosotros = 'text-white'
          this.rutas[0].productos = 'text-white'
          this.rutas[0].login = 'text-secondary'
        break;
      default:
          this.rutas[0].home = 'text-secondary';
          this.rutas[0].contactar = 'text-white'
          this.rutas[0].locales = 'text-white'
          this.rutas[0].nosotros = 'text-white'
          this.rutas[0].productos = 'text-white'
          this.rutas[0].login = 'text-white'
        break;
    }
  }

  myRuta(){
    this.ruta = this.router.url;
    console.log(this.ruta)
    return this.ruta
  }

  signOut(){
    this.cookies.delete("Data")
    this.router.navigate(['/']);
    this.myRuta();
  }

  ngOnInit(){
    this.nav();
    this.myRuta();
  }
}
