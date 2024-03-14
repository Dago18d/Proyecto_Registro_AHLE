import { Component, HostListener, OnInit } from '@angular/core';
import { DatosExInternos } from '../../models/exInternos';
import { ExInternosService } from '../../services/ex-internos.service';

@Component({
  selector: 'app-ex-internos-tabla',
  templateUrl: './ex-internos-tabla.component.html',
  styleUrls: ['./ex-internos-tabla.component.css']
})
export class ExInternosTablaComponent implements OnInit {



  tablaDatosExInternos: DatosExInternos[] = [];

  constructor(private _datosExInternos: ExInternosService) { }

  ngOnInit(): void {
    this.getDatosExInternos();
  }

  getDatosExInternos() {
    this._datosExInternos.getDatosExInternos().subscribe(data => {
      console.log(data);
      this.tablaDatosExInternos = data;
    }, error => {
      console.log(error);
    });
  }

  deleteDatosExInternos(id: any){
    this._datosExInternos.deleteDatosExInternos(id).subscribe(data => {
      this.getDatosExInternos();
    }, error => {
      console.log(error);
    });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'p') {
      event.preventDefault(); // Evita la acción predeterminada del navegador
      this.print(); // Llama a la función de impresión
    }
  }

  print() {
    window.print(); // Imprime la página actual
  }
}
