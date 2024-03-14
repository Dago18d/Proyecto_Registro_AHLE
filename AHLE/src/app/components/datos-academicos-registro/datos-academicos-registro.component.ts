import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatosAcademicos } from '../../models/datosAcademicos';
import { DatosAcademicosService } from '../../services/datos-academicos.service';

@Component({
  selector: 'app-datos-academicos-registro',
  templateUrl: './datos-academicos-registro.component.html',
  styleUrls: ['./datos-academicos-registro.component.css']
})
export class DatosAcademicosRegistroComponent implements OnInit {

  DatosAcademicosForm: FormGroup;
  title = 'Datos Academicos';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private _datosAcademicosService: DatosAcademicosService, private aRouter: ActivatedRoute) {
    this.DatosAcademicosForm = this.fb.group({
      Ident: ['', Validators.required],
      nivelEducativo: ['', Validators.required],
      ultimoGradoEscolar: ['', Validators.required],
      institucionAnterior: ['', Validators.required],
      areaInteres: ['', Validators.required],

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.Edit();
  }

  addDatosAcademicos() {

    const DATOSACADEMICOS: DatosAcademicos = {
      Ident: this.DatosAcademicosForm.get('Ident')?.value,
      nivelEducativo: this.DatosAcademicosForm.get('nivelEducativo')?.value,
      ultimoGradoEscolar: this.DatosAcademicosForm.get('ultimoGradoEscolar')?.value,
      institucionAnterior: this.DatosAcademicosForm.get('institucionAnterior')?.value,
      areaInteres: this.DatosAcademicosForm.get('areaInteres')?.value,
    }
    //Verificar existe el producto
    if (this.id !== null) {
      //existe el producto se edita
      this._datosAcademicosService.updateDatosAcademicos(this.id, DATOSACADEMICOS).subscribe(data => {
        this.router.navigate(['/tabla-datosAcademicos']);
      }, error => {
        console.log(error);
        this.DatosAcademicosForm.reset();
      })
    } else {
      //no existe el producto se crea
      console.log(DATOSACADEMICOS);
      this._datosAcademicosService.saveDatosAcademicos(DATOSACADEMICOS).subscribe(data => {
        this.router.navigate(['/tabla-datosAcademicos'])
      }, error => {
        console.log(error);
        this.DatosAcademicosForm.reset();
      })
    }


  }

  Edit() {

    if (this.id !== null) {
      this.title = 'Editar datos Academicos';
      this._datosAcademicosService.getADatosAcademicos(this.id).subscribe(data => {
        this.DatosAcademicosForm.setValue({

          Ident: data.Ident,
          nivelEducativo: data.nivelEducativo,
          ultimoGradoEscolar: data.ultimoGradoEscolar,
          institucionAnterior: data.institucionAnterior,
          areaInteres: data.areaInteres

        })
      })
    }
  }
}
