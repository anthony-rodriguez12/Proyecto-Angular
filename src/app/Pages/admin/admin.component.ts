import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';

import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { NewComponent } from 'src/app/Form/new/new.component';
import { EditComponent } from 'src/app/Form/edit/edit.component';
import { ClienteInterface } from '../../interfaces/cliente-interface';

export const data:ClienteInterface[] = [{
    position: 1,
    img:"https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/lubricantes/44max5201.png?sfvrsn=20054f2_2",
    nombre:"Aceite de motor sintético" ,
    descripcion: "Los aceites de motor totalmente sintéticos resisten el cizallamiento bajo cargas pesadas mejor que los aceites convencionales",
    categoria: "Aceites",
    estado:"Disponible",
    precio:21.25,
    modificar: 'Editar',
  },
  {
    position: 2,
    img:"https://www.valvoline.com/4ac64f/globalassets/sitecore/ecuadorregion/images/aceite-original/premium_protection_10w-30.png?format=webp&quality=80&width=300&height=300",
    nombre:"Aceite de motor, convencional" ,
    descripcion: "Está especialmente formulado para superar los estándares de la industria en materia de desgaste,depósito y protección contra el lodo",
    categoria: "Aceites",
    estado:"Agotado",
    precio:42.30,
    modificar: 'Editar',
  },
  {
    position: 3,
    img:"https://www.pngall.com/wp-content/uploads/4/Flashlight-PNG-High-Quality-Image.png",
    nombre:"Linterna" ,
    descripcion: "La linterna es ideal para proyectos de trabajo incluyendo soldadura de tubos de cobre de gran diámetro, soldadura, tratamiento térmico.",
    categoria: "Herramientas",
    estado:"Disponible",
    precio:32.40,
    modificar: 'Editar',
  },
  {
    position: 4,
    img:"https://images-na.ssl-images-amazon.com/images/I/718GmjiwbAL._AC_UL330_SR330,330_.jpg",
    nombre:"Martillo Uña " ,
    descripcion: "Toda obra necesita un martillo de uña para introducir o retirar clavos, rasgar y retirar componentes estructurales de madera. ",
    categoria: "Herramientas",
    estado:"Disponible",
    precio:15.20,
    modificar: 'Editar',
  },
  {
    position: 5,
    img:"https://leetools.com.br/wp-content/uploads/2017/07/681322.png",
    nombre:"Estilete" ,
    descripcion: "El estilete es un tipo de daga o cuchillo con una hoja muy larga y aguda de varios diseños, utilizada principalmente como arma punzante.",
    categoria: "Herramientas",
    estado:"Disponible",
    precio:17.20,
    modificar: 'Editar',
  },
  {
    position: 6,
    img:"https://www.bosch-professional.com/binary/ocsmedia/optimized/750x422/o275004v54_lv-111108-12-lv-132017-15-hugks093_24Dentes.png",
    nombre:"Sierra Circular" ,
    descripcion: "La sierra circular es una máquina para aserrar longitudinal o transversalmente madera, metal, plástico u otros materiales.",
    categoria: "Sierra",
    estado:"Agotado",
    precio:119.20,
    modificar: 'Editar',
  }

];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent {
  displayedColumns: string[] = ['position','nombre','descripcion','img', 'categoria','estado','precio', 'modificar'];
  dataToDisplay = [...data];
  
  dataSource = new MatTableDataSource<ClienteInterface>;

  nuevoCliente:any;
  nav: any;
  nposition: any;
  
  constructor(private router: Router, private dialog:MatDialog,private cookies:CookieService) { 
    this.nav = this.router.getCurrentNavigation();
    this.nuevoCliente = this.nav.extras.state;
    
    let counte = this.dataToDisplay.length
    this.cookies.set("total", counte.toString())
    this.dataSource = new MatTableDataSource(this.dataToDisplay);

    if (this.nuevoCliente != null){      
      console.log(this.nuevoCliente.datosCliente.queryParams)
      let types = this.nuevoCliente.datosCliente.queryParams.types
      if(types === 'Agregar'){
        this.addData();
      }else if(types === 'Modificar'){
        this.editData();
      }
      console.log(this.nuevoCliente.datosCliente.queryParams);
    }
  };

  addData() {
    let newData = this.nuevoCliente.datosCliente.queryParams.info;
    this.dataToDisplay = [...this.dataToDisplay,newData];
    //this.dataSource.setData(this.dataToDisplay)
    this.dataSource.data = this.dataToDisplay;
  }

  editData(){
    let newData = this.nuevoCliente.datosCliente.queryParams.info;
    this.dataToDisplay = [...this.dataToDisplay];
    this.nposition = this.cookies.get("nposition")
    console.log(this.dataToDisplay)
    this.dataToDisplay.map((element) => {
      console.log("Position:"+this.nposition,"Element:"+element.position)
      if(this.nposition == element.position){
        console.log("Antes:",element)
        console.log('Entre')
        element.img = newData.img;
        element.nombre = newData.nombre;     
        element.descripcion = newData.descripcion;
        element.categoria = newData.categoria;
        element.estado = newData.estado;
        element.precio = newData.precio;
        console.log("Despues:",element)
      }
      console.log("no entro")
    })
    
    //this.dataToDisplay = this.dataToDisplay.filter((item) => item.position !== this.nposition);
    this.dataSource.data = this.dataToDisplay;
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.data = this.dataToDisplay;
  }

  openDialogEditRow(element:any){
    this.nposition = element.position;
    this.cookies.set("nposition", this.nposition)
    this.dialog.open(EditComponent, {
      width: '70%',
    })
  }

  openDialogAgregar(){
    this.dialog.open(NewComponent, {
      width: '70%',
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}



class DataSourceFound extends DataSource<ClienteInterface>{
  private _dataStream = new ReplaySubject<ClienteInterface[]>();

  constructor(initialData: ClienteInterface[], ) {
    super();
    this.setData(initialData);
  }
  
  connect(): Observable<ClienteInterface[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: ClienteInterface[]) {
    this._dataStream.next(data);
  }
}
