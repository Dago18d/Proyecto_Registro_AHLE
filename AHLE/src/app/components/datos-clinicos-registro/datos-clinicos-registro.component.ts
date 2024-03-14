import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatosClinicos } from '../../models/datosClinicos';
import { Product } from '../../models/product';
import { DatosClinicosService } from '../../services/datos-clinicos.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-datos-clinicos-registro',
  templateUrl: './datos-clinicos-registro.component.html',
  styleUrls: ['./datos-clinicos-registro.component.css']
})
export class DatosClinicosRegistroComponent implements OnInit {

  datosClinicosForm: FormGroup;
  title = 'Datos Clinicos';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private _datosClinicosService: DatosClinicosService, private aRouter: ActivatedRoute) {
    this.datosClinicosForm = this.fb.group({
      Ident: ['', Validators.required],
      alergias: ['', Validators.required],
      padecimiento: ['', Validators.required],
      medicamentos: ['', Validators.required],
      contactoEmergencia: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.Edit();
  }

  addDatosClinicos() {

    const DATOSCLINICOS: DatosClinicos = {
      Ident: this.datosClinicosForm.get('Ident')?.value,
      alergias: this.datosClinicosForm.get('alergias')?.value,
      padecimiento: this.datosClinicosForm.get('padecimiento')?.value,
      medicamentos: this.datosClinicosForm.get('medicamentos')?.value,
      contactoEmergencia: this.datosClinicosForm.get('contactoEmergencia')?.value,
    }
    //Verificar existe el producto
    if (this.id !== null) {
      //existe el producto se edita
      this._datosClinicosService.updateDatosClinicos(this.id, DATOSCLINICOS).subscribe(data => {
        this.router.navigate(['/tabla-datosClinicos']);
      }, error => {
        console.log(error);
        this.datosClinicosForm.reset();
      })
    } else {
      //no existe el producto se crea
      console.log(DATOSCLINICOS);
      this._datosClinicosService.saveDatosClinicos(DATOSCLINICOS).subscribe(data => {
        this.router.navigate(['/tabla-datosClinicos'])
      }, error => {
        console.log(error);
        this.datosClinicosForm.reset();
      })
    }


  }

  Edit() {

    if (this.id !== null) {
      this.title = 'Editar Datos Clinicos';
      this._datosClinicosService.getADatosClinicos(this.id).subscribe(data => {
        this.datosClinicosForm.setValue({

        Ident: data.Ident,
         alergias: data.alergias,
         padecimiento: data.padecimiento,
         medicamentos: data.medicamentos,
         contactoEmergencia: data.contactoEmergencia,




        })
      })
    }
  }
}

