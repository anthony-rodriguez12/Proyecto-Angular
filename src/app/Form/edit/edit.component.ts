import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ClienteInterface } from '../../interfaces/cliente-interface';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  
  constructor(private router: Router, private dialogRef: MatDialogRef<EditComponent>,private cookies:CookieService, @Inject(MAT_DIALOG_DATA) public data: ClienteInterface) { };

  position: number = 0;
  img:string = "";
  nombre: string = "";
  descripcion: string = "";
  categoria: string = "";
  estado: string = "";
  precio: number = 0;
  ngOnInit(): void {
    this.position = this.data?.position;
    this.img = this.data?.img;
    this.nombre = this.data?.nombre;
    this.descripcion = this.data?.descripcion;
    this.categoria = this.data?.categoria;
    this.estado = this.data?.estado;
    this.precio = this.data?.precio;
    console.log("prueba cate",this.data?.categoria)
    console.log(this.data.img,
    this.data.nombre,
    this.data.descripcion,
    this.data.estado,
    )
  }

  usuarioNuevo = new FormGroup({
    nombre: new FormControl(this.data?.nombre, Validators.required),
    img: new FormControl(this.data?.img, Validators.required),
    descripcion: new FormControl(this.data?.descripcion, Validators.required),
    categoria: new FormControl(this.data?.categoria, Validators.required),
    estado: new FormControl(this.data?.estado, Validators.required),
    precio: new FormControl(this.data?.precio, Validators.required)
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
          img: this.usuarioNuevo.value.img,
          categoria: this.usuarioNuevo.value.categoria,
          estado: this.usuarioNuevo.value.estado,
          precio: this.usuarioNuevo.value.precio
        }
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

  cancelar()
  {
    this.dialogRef.close(); 
  }
}
