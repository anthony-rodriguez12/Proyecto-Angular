import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit{
  total:any;
  constructor(private router: Router, private dialogRef: MatDialogRef<NewComponent>,private cookies:CookieService) { 
    this.total = this.cookies.get("total")
  }
  
  ngOnInit(): void {    
  }
  
  usuarioNuevo = new FormGroup({
    position: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    categoria: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
  })

  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
          types: 'Agregar',
          info: {
            position: ++this.total,
            nombre: this.usuarioNuevo.value.nombre,
            descripcion: this.usuarioNuevo.value.descripcion,
            categoria: this.usuarioNuevo.value.categoria,
            precio: this.usuarioNuevo.value.precio,
            estado: this.usuarioNuevo.value.estado,
        },
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo('/admin', objToSend);
  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }

  cancelar(){
    this.dialogRef.close(); 
  }
}
