import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TablaregistroComponent } from './components/tablaregistro/tablaregistro.component';
import { DatosClinicosTablaComponent } from './components/datos-clinicos-tabla/datos-clinicos-tabla.component';
import { DatosClinicosRegistroComponent } from './components/datos-clinicos-registro/datos-clinicos-registro.component';
import { DatosGeneralesTablaComponent } from './components/datos-generales-tabla/datos-generales-tabla.component';
import { DatosGeneralesRegistroComponent } from './components/datos-generales-registro/datos-generales-registro.component';
import { ExInternosTablaComponent } from './components/ex-internos-tabla/ex-internos-tabla.component';
import { ExInternosRegistroComponent } from './components/ex-internos-registro/ex-internos-registro.component';
import { DatosAcademicosTablaComponent } from './components/datos-academicos-tabla/datos-academicos-tabla.component';
import { DatosAcademicosRegistroComponent } from './components/datos-academicos-registro/datos-academicos-registro.component';
import { DatosEncargadoTablaComponent } from './components/datos-encargado-tabla/datos-encargado-tabla.component';
import { DatosEncargadoRegistroComponent } from './components/datos-encargado-registro/datos-encargado-registro.component';
import { DatosPsiTablaComponent } from './datos-psi-tabla/datos-psi-tabla.component';
import { DatosPsiRegistroComponent } from './datos-psi-registro/datos-psi-registro.component';

const routes: Routes = [
 // { path: '', component: ListProductsComponent },
 // { path: 'create-product', component: CreateProductComponent },
  //{ path: 'edit-product/:id', component: CreateProductComponent },
  {path: '', component: InicioComponent},
  {path: 'tabla', component: TablaregistroComponent},
  {path: 'tabla-datosClinicos', component: DatosClinicosTablaComponent},
  {path: 'tabla-datosGenerales', component: DatosGeneralesTablaComponent},
  {path: 'tabla-exInternos', component: ExInternosTablaComponent},
  {path: 'tabla-datosAcademicos', component: DatosAcademicosTablaComponent},
  {path: 'tabla-datosEncargado', component: DatosEncargadoTablaComponent},
  {path: 'tabla-datosPsi', component: DatosPsiTablaComponent},
  {path: 'crear-registro', component: RegistroComponent},
  {path: 'crear-datosClinicos', component: DatosClinicosRegistroComponent},
  {path: 'crear-datosGenerales', component: DatosGeneralesRegistroComponent},
  {path: 'crear-datosEx', component: ExInternosRegistroComponent},
  {path: 'crear-datosAcademicos', component: DatosAcademicosRegistroComponent},
  {path: 'crear-datosEncargado', component: DatosEncargadoRegistroComponent},
  {path: 'crear-datosPsi', component: DatosPsiRegistroComponent},
  {path: 'edit-registro/:id', component: RegistroComponent},
  {path: 'edit-datosClinicos/:id', component: DatosClinicosRegistroComponent},
  {path: 'edit-datosGenerales/:id', component: DatosGeneralesRegistroComponent},
  {path: 'edit-datosEx/:id', component: ExInternosRegistroComponent },
  {path: 'edit-datosAcademicos/:id', component: DatosAcademicosRegistroComponent},
  {path: 'edit-datosEncargado/:id', component: DatosEncargadoRegistroComponent},
  {path: 'edit-datosPsi/:id', component: DatosPsiRegistroComponent},


  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
