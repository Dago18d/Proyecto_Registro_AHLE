import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatosPsi } from '../models/datosPsi';
import { DatosPsiService } from '../services/datos-psi.service';

@Component({
  selector: 'app-datos-psi-registro',
  templateUrl: './datos-psi-registro.component.html',
  styleUrls: ['./datos-psi-registro.component.css']
})
export class DatosPsiRegistroComponent implements OnInit {

  datosPsiForm: FormGroup;
  title = 'Datos Psicologicos';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private _datosPsiService: DatosPsiService, private aRouter: ActivatedRoute) {
    this.datosPsiForm = this.fb.group({
      Ident:['', Validators.required],
      comportamientos: ['', Validators.required],
      trastornos: ['', Validators.required],

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.Edit();
  }

  addDatosPsi() {

    const DATOSPSI:DatosPsi = {
      Ident:this.datosPsiForm.get('Ident')?.value,
      comportamientos: this.datosPsiForm.get('comportamientos')?.value,
      trastornos: this.datosPsiForm.get('trastornos')?.value

    }
    //Verificar existe el producto
    if (this.id !== null) {
      //existe el producto se edita
      this._datosPsiService.updateDatosPsi(this.id, DATOSPSI).subscribe(data => {
        this.router.navigate(['/tabla-datosPsi']);
      }, error => {
        console.log(error);
        this.datosPsiForm.reset();
      })
    } else {
      //no existe el producto se crea
      console.log(DATOSPSI);
      this._datosPsiService.saveDatosPsi(DATOSPSI).subscribe(data => {
        this.router.navigate(['/tabla-datosPsi'])
      }, error => {
        console.log(error);
        this.datosPsiForm.reset();
      })
    }


  }

  Edit() {

    if (this.id !== null) {
      this.title = 'Editar Datos Psicologicos';
      this._datosPsiService.getADatosPsi(this.id).subscribe(data => {
        this.datosPsiForm.setValue({
        Ident: data.Ident,
         comportamientos: data.comportamientos,
         trastornos: data.trastornos





        })
      })
    }
  }
}
