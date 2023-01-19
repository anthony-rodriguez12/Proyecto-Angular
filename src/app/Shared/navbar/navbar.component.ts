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
  logied: boolean = false;
  logie:string = '';
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
    try {
      this.logie = this.cookies.get("loging");
      this.logie = JSON.parse(this.logie);
      this.logied = this.stringToBoolean(this.logie)
      console.log(this.logied)
    } catch (error) {
      console.log(error)
    }
  }

  rutas = [
    {home:'sd'},
    {contactar:''},
    {servicios:''},
    {nosotros:''},
    {productos:''},
    {login:''}
  ]
  

stringToBoolean(str:string){
    switch (str.toLowerCase())
    {
      case "true":
      case "yes":
      case "1":
        return true;

      case "false":
      case "no":
      case "0":
        return false;

      default:
        return false;
    }
  }

  nav(){
    let x:string = this.router.url
    console.log(x)
    switch (x) {
      case "/home":
          this.rutas[0].home = 'text-secondary';
          this.rutas[0].contactar = 'text-white'
          this.rutas[0].servicios = 'text-white'
          this.rutas[0].nosotros = 'text-white'
          this.rutas[0].productos = 'text-white'
          this.rutas[0].login = 'text-white'

          console.log(this.rutas[0].home)
        break;
      case "/contactar":
          this.rutas[0].home = 'text-white';
          this.rutas[0].contactar = 'text-secondary'
          this.rutas[0].servicios = 'text-white'
          this.rutas[0].nosotros = 'text-white'
          this.rutas[0].productos = 'text-white'
          this.rutas[0].login = 'text-white'
        break;
      case "/servicios":
          this.rutas[0].home = 'text-white';
          this.rutas[0].contactar = 'text-white'
          this.rutas[0].servicios = 'text-secondary'
          this.rutas[0].nosotros = 'text-white'
          this.rutas[0].productos = 'text-white'
          this.rutas[0].login = 'text-white'
        break;
      case "/nosotros":
          this.rutas[0].home = 'text-white';
          this.rutas[0].contactar = 'text-white'
          this.rutas[0].servicios = 'text-white'
          this.rutas[0].nosotros = 'text-secondary'
          this.rutas[0].productos = 'text-white'
          this.rutas[0].login = 'text-white'
        break;
      case "/productos":
          this.rutas[0].home = 'text-white';
          this.rutas[0].contactar = 'text-white'
          this.rutas[0].servicios = 'text-white'
          this.rutas[0].nosotros = 'text-white'
          this.rutas[0].productos = 'text-secondary'
          this.rutas[0].login = 'text-white'
        break;
      case "/login":
          this.rutas[0].home = 'text-white';
          this.rutas[0].contactar = 'text-white'
          this.rutas[0].servicios = 'text-white'
          this.rutas[0].nosotros = 'text-white'
          this.rutas[0].productos = 'text-white'
          this.rutas[0].login = 'text-secondary'
        break;
      default:
          this.rutas[0].home = 'text-secondary';
          this.rutas[0].contactar = 'text-white'
          this.rutas[0].servicios = 'text-white'
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

  APanel(){   
    this.router.navigate(['/']);
    this.myRuta();
  }
  
  signOut(){
    this.user = this.cookies.delete("Data")
    this.cookies.set("loging",JSON.stringify('false'))
    this.logied = true;
    this.router.navigate(['/']);
    this.myRuta();
  }

  logging(){
    this.cookies.set("loging",JSON.stringify('true'))
    
  }

  ngOnInit(){
    this.nav();
    this.myRuta();
  }
}
