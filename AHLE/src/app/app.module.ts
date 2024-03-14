
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegistroComponent } from './components/registro/registro.component';
import { TablaregistroComponent } from './components/tablaregistro/tablaregistro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DatosClinicosRegistroComponent } from './components/datos-clinicos-registro/datos-clinicos-registro.component';
import { DatosClinicosTablaComponent } from './components/datos-clinicos-tabla/datos-clinicos-tabla.component';
import jsPDF from 'jspdf';
import { DatosGeneralesRegistroComponent } from './components/datos-generales-registro/datos-generales-registro.component';
import { DatosGeneralesTablaComponent } from './components/datos-generales-tabla/datos-generales-tabla.component';
import { ExInternosTablaComponent } from './components/ex-internos-tabla/ex-internos-tabla.component';
import { ExInternosRegistroComponent } from './components/ex-internos-registro/ex-internos-registro.component';
import { DatosAcademicosRegistroComponent } from './components/datos-academicos-registro/datos-academicos-registro.component';
import { DatosAcademicosTablaComponent } from './components/datos-academicos-tabla/datos-academicos-tabla.component';
import { DatosEncargadoTablaComponent } from './components/datos-encargado-tabla/datos-encargado-tabla.component';
import { DatosEncargadoRegistroComponent } from './components/datos-encargado-registro/datos-encargado-registro.component';
import { DatosPsiTablaComponent } from './datos-psi-tabla/datos-psi-tabla.component';
import { DatosPsiRegistroComponent } from './datos-psi-registro/datos-psi-registro.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    TablaregistroComponent,
    InicioComponent,
    DatosClinicosRegistroComponent,
    DatosClinicosTablaComponent,
    DatosGeneralesRegistroComponent,
    DatosGeneralesTablaComponent,
    ExInternosTablaComponent,
    ExInternosRegistroComponent,
    DatosAcademicosRegistroComponent,
    DatosAcademicosTablaComponent,
    DatosEncargadoTablaComponent,
    DatosEncargadoRegistroComponent,
    DatosPsiTablaComponent,
    DatosPsiRegistroComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
