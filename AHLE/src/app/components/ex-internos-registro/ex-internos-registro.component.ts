import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatosExInternos } from '../../models/exInternos';
import { ExInternosService } from '../../services/ex-internos.service';

@Component({
  selector: 'app-ex-internos-registro',
  templateUrl: './ex-internos-registro.component.html',
  styleUrls: ['./ex-internos-registro.component.css']
})
export class ExInternosRegistroComponent implements OnInit {

  DatosExInternosForm: FormGroup;
  title = 'Datos Ex-Internos';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private _datosExInternos: ExInternosService, private aRouter: ActivatedRoute) {
    this.DatosExInternosForm = this.fb.group({
      Ident: ['', Validators.required],
      nombre: ['', Validators.required],
      identidad: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      edad: ['', Validators.required],
      tallaRopa: ['', Validators.required],
      tallaZapato: ['', Validators.required],
      discapacidad: ['', Validators.required],
      motivoSalida: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.Edit();
  }

  addDatosExInternos() {

    const DATOSEX: DatosExInternos = {

      Ident: this.DatosExInternosForm.get('Ident')?.value,
      nombre: this.DatosExInternosForm.get('nombre')?.value,
      identidad: this.DatosExInternosForm.get('identidad')?.value,
      fechaNacimiento: this.DatosExInternosForm.get('fechaNacimiento')?.value,
      edad: this.DatosExInternosForm.get('edad')?.value,
      tallaRopa: this.DatosExInternosForm.get('tallaRopa')?.value,
      tallaZapato: this.DatosExInternosForm.get('tallaZapato')?.value,
      discapacidad: this.DatosExInternosForm.get('discapacidad')?.value,
      motivoSalida: this.DatosExInternosForm.get('motivoSalida')?.value
    }
    //Verificar existe el producto
    if (this.id !== null) {
      //existe el producto se edita
      this._datosExInternos.updateDatosExInternos(this.id, DATOSEX).subscribe(data => {
        this.router.navigate(['/tabla-exInternos']);
      }, error => {
        console.log(error);
        this.DatosExInternosForm.reset();
      })
    } else {
      //no existe el producto se crea
      console.log(DATOSEX);
      this._datosExInternos.saveDatosExInternos(DATOSEX).subscribe(data => {
        this.router.navigate(['/tabla-exInternos'])
      }, error => {
        console.log(error);
        this.DatosExInternosForm.reset();
      })
    }


  }

  Edit() {

    if (this.id !== null) {
      this.title = 'Editar Datos EX-Internos';
      this._datosExInternos.getADatosExInternos(this.id).subscribe(data => {
        this.DatosExInternosForm.setValue({

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
