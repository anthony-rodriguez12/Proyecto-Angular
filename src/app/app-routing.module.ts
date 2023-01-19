import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactarComponent } from './Pages/contactar/contactar.component';
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import { ProductosComponent } from './Pages/productos/productos.component';
import { LoginComponent } from './Pages/login/login.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { NewComponent } from './Form/new/new.component';
import { ServiciosComponent } from './Pages/servicios/servicios.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'contactar', component:ContactarComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'productos', component:ProductosComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminComponent},
  {path:'new', component:NewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
