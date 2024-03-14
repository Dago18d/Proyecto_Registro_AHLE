import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatosGenerales } from '../../models/datosGenerales';
import { Registro } from '../../models/registro';
import { DatosGeneralesService } from '../../services/datos-generales.service';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-datos-generales-registro',
  templateUrl: './datos-generales-registro.component.html',
  styleUrls: ['./datos-generales-registro.component.css']
})
export class DatosGeneralesRegistroComponent implements OnInit {

  DatosGeneralesForm: FormGroup;
  title = 'Datos Generales';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private _datosGeneralesService: DatosGeneralesService, private aRouter: ActivatedRoute) {
    this.DatosGeneralesForm = this.fb.group({
      Ident: ['', Validators.required],
      nombre: ['', Validators.required],
      identidad: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      edad: ['', Validators.required],
      tallaRopa: ['', Validators.required],
      tallaZapato: ['', Validators.required],
      discapacidad: ['', Validators.required],
      motivoSalida: ['']
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.Edit();
  }

  addDatosGenerales() {

    const DATOSGENERALES: DatosGenerales = {
      Ident: this.DatosGeneralesForm.get('Ident')?.value,
      nombre: this.DatosGeneralesForm.get('nombre')?.value,
      identidad: this.DatosGeneralesForm.get('identidad')?.value,
      fechaNacimiento: this.DatosGeneralesForm.get('fechaNacimiento')?.value,
      edad: this.DatosGeneralesForm.get('edad')?.value,
      tallaRopa: this.DatosGeneralesForm.get('tallaRopa')?.value,
      tallaZapato: this.DatosGeneralesForm.get('tallaZapato')?.value,
      discapacidad: this.DatosGeneralesForm.get('discapacidad')?.value,
      motivoSalida: this.DatosGeneralesForm.get('motivoSalida')?.value
    }
    //Verificar existe el producto
    if (this.id !== null) {
      //existe el producto se edita
      this._datosGeneralesService.updateDatosGenerales(this.id, DATOSGENERALES).subscribe(data => {
        this.router.navigate(['/tabla-datosGenerales']);
      }, error => {
        console.log(error);
        this.DatosGeneralesForm.reset();
      })
    } else {
      //no existe el producto se crea
      console.log(DATOSGENERALES);
      this._datosGeneralesService.saveDatosGenerales(DATOSGENERALES).subscribe(data => {
        this.router.navigate(['/tabla-datosGenerales'])
      }, error => {
        console.log(error);
        this.DatosGeneralesForm.reset();
      })
    }


  }

  Edit() {

    if (this.id !== null) {
      this.title = 'Editar Datos Generales';
      this._datosGeneralesService.getADatosGenerales(this.id).subscribe(data => {
        this.DatosGeneralesForm.setValue({

          Ident: data.Ident,
          nombre: data.nombre,
          identidad: data.identidad,
          fechaNacimiento: data.fechaNacimiento,
          edad: data.edad,
          tallaRopa: data.tallaRopa,
          tallaZapato: data.tallaZapato,
          discapacidad: data.discapacidad,
          motivoSalida: data.motivoSalida



        })
      })
    }
  }
}
