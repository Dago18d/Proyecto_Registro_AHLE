import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatosEncargado } from '../../models/datosEncargado';
import { DatosEncargadoService } from '../../services/datos-encargado.service';

@Component({
  selector: 'app-datos-encargado-registro',
  templateUrl: './datos-encargado-registro.component.html',
  styleUrls: ['./datos-encargado-registro.component.css']
})
export class DatosEncargadoRegistroComponent implements OnInit {

  datosEncargadoForm: FormGroup;
  title = 'Datos Encargado';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private _datosEncargadoService: DatosEncargadoService, private aRouter: ActivatedRoute) {
    this.datosEncargadoForm = this.fb.group({
      Ident: ['', Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      edad: ['', Validators.required],
      correo: ['', Validators.required],
      profesion: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.Edit();
  }

  addDatosEncargado() {

    const DATOSENCARGADO: DatosEncargado = {
      Ident: this.datosEncargadoForm.get('Ident')?.value,
      nombre: this.datosEncargadoForm.get('nombre')?.value,
      telefono: this.datosEncargadoForm.get('telefono')?.value,
      edad: this.datosEncargadoForm.get('edad')?.value,
      correo: this.datosEncargadoForm.get ('correo')?.value,
      profesion:this.datosEncargadoForm.get('profesion')?.value

    }
    //Verificar existe el producto
    if (this.id !== null) {
      //existe el producto se edita
      this._datosEncargadoService.updateDatosEncargado(this.id, DATOSENCARGADO).subscribe(data => {
        this.router.navigate(['/tabla-datosEncargado']);
      }, error => {
        console.log(error);
        this.datosEncargadoForm.reset();
      })
    } else {
      //no existe el producto se crea
      console.log(DATOSENCARGADO);
      this._datosEncargadoService.saveDatosEncargado(DATOSENCARGADO).subscribe(data => {
        this.router.navigate(['/tabla-datosEncargado'])
      }, error => {
        console.log(error);
        this.datosEncargadoForm.reset();
      })
    }


  }

  Edit() {

    if (this.id !== null) {
      this.title = 'Editar Datos Encargado';
      this._datosEncargadoService.getADatosEncargado(this.id).subscribe(data => {
        this.datosEncargadoForm.setValue({

        Ident: data.Ident,
         nombre: data.nombre,
         telefono: data.telefono,
         edad: data.edad,
         correo: data.correo,
         profesion: data.profesion





        })
      })
    }
  }
}


