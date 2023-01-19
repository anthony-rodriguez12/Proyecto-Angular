import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { data } from '../admin/admin.component';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  impData:any;
  constructor(){
    this.impData = [...data]
  }

  public isCollapsed = [
    {be: true},
    {be: true},
    {be: true},
    {be: true},
    {be: true},
    {be: true}
  ];
  
  ok(){
    console.log(this.isCollapsed[0].be)
  }
  
  title = 'taller-pi';
  arreglos:any=[{
    position: 1,
    img:"https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/lubricantes/44max5201.png?sfvrsn=20054f2_2",
    nombre:"Aceite de motor sintético" ,
    descripcion: "Los aceites de motor totalmente sintéticos resisten el cizallamiento bajo cargas pesadas mejor que los aceites convencionales",
    categoria: "Aceites",
    estado:"Disponible",
    precio:21.25
  },{
    position: 2,
    img:"https://www.valvoline.com/4ac64f/globalassets/sitecore/ecuadorregion/images/aceite-original/premium_protection_10w-30.png?format=webp&quality=80&width=300&height=300",
    nombre:"Aceite de motor, convencional" ,
    descripcion: "Está especialmente formulado para superar los estándares de la industria en materia de desgaste,depósito y protección contra el lodo",
    categoria: "Aceites",
    estado:"Agotado",
    precio:42.30
  },{
    position: 3,
    img:"https://www.pngall.com/wp-content/uploads/4/Flashlight-PNG-High-Quality-Image.png",
    nombre:"Linterna" ,
    descripcion: "La linterna es ideal para proyectos de trabajo incluyendo soldadura de tubos de cobre de gran diámetro, soldadura, tratamiento térmico.",
    categoria: "Herramientas",
    estado:"Disponible",
    precio:32.40
  },{
    position: 4,
    img:"https://images-na.ssl-images-amazon.com/images/I/718GmjiwbAL._AC_UL330_SR330,330_.jpg",
    nombre:"Martillo Uña " ,
    descripcion: "Toda obra necesita un martillo de uña para introducir o retirar clavos, rasgar y retirar componentes estructurales de madera. ",
    categoria: "Herramientas",
    estado:"Disponible",
    precio:15.20
  },{
    position: 5,
    img:"https://leetools.com.br/wp-content/uploads/2017/07/681322.png",
    nombre:"Estilete" ,
    descripcion: "El estilete es un tipo de daga o cuchillo con una hoja muy larga y aguda de varios diseños, utilizada principalmente como arma punzante.",
    categoria: "Herramientas",
    estado:"Disponible",
    precio:17.20
  },{
    position: 6,
    img:"https://www.bosch-professional.com/binary/ocsmedia/optimized/750x422/o275004v54_lv-111108-12-lv-132017-15-hugks093_24Dentes.png",
    nombre:"Sierra Circular" ,
    descripcion: "La sierra circular es una máquina para aserrar longitudinal o transversalmente madera, metal, plástico u otros materiales.",
    categoria: "Sierra",
    estado:"Agotado",
    precio:119.20
  }
  ]
  
  
}
