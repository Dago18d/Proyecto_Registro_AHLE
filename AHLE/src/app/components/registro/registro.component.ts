import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Registro } from '../../models/registro';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup;
  title = 'Datos Registro';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private _registroService: RegistroService, private aRouter: ActivatedRoute) {
    this.registroForm = this.fb.group({

      Ident: ['', Validators.required],
      nombre: ['', Validators.required],
      motivo: ['', Validators.required],
      referencias: ['', Validators.required],
      encargado: ['', Validators.required],
      ubicacion: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.Edit();
  }

  addRegistro() {

    const REGISTRO: Registro = {
      Ident: this.registroForm.get('Ident')?.value,
      nombre: this.registroForm.get('nombre')?.value,
      motivo: this.registroForm.get('motivo')?.value,
      referencias: this.registroForm.get('referencias')?.value,
      encargado: this.registroForm.get('encargado')?.value,
      ubicacion: this.registroForm.get('ubicacion')?.value,
    }
    //Verificar existe el producto
    if (this.id !== null) {
      //existe el producto se edita
      this._registroService.editRegistro(this.id, REGISTRO).subscribe(data => {
        this.router.navigate(['/tabla']);
      }, error => {
        console.log(error);
        this.registroForm.reset();
      })
    } else {
      //no existe el producto se crea
      console.log(REGISTRO);
      this._registroService.saveRegistro(REGISTRO).subscribe(data => {
        this.router.navigate(['/tabla'])
      }, error => {
        console.log(error);
        this.registroForm.reset();
      })
    }


  }

  Edit() {

    if (this.id !== null) {
      this.title = 'Edit Registro';
      this._registroService.getARegistro(this.id).subscribe(data => {
        this.registroForm.setValue({

          Ident: data.Ident,
          nombre: data.nombre,
          motivo: data.motivo,
          referencias: data.referencias,
          encargado: data.encargado,
          ubicacion: data.ubicacion

        })
      })
    }
  }
}
