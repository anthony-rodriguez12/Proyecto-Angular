import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  
  constructor(private router: Router, private dialogRef: MatDialogRef<EditComponent>,private cookies:CookieService) { }

  ngOnInit(): void {
  }

  usuarioNuevo = new FormGroup({
    nombre: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    categoria: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required)
  })
  
  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        types: 'Modificar',
        info: {
          position: this.cookies.get("nposition"),
          nombre: this.usuarioNuevo.value.nombre,
          descripcion: this.usuarioNuevo.value.descripcion,
          categoria: this.usuarioNuevo.value.categoria,
          estado: this.usuarioNuevo.value.estado,
          precio: this.usuarioNuevo.value.precio
        }
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo('/cliente', objToSend);

  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }
}
