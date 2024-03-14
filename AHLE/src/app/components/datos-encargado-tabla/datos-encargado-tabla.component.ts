import { Component, HostListener, OnInit } from '@angular/core';
import { DatosEncargado } from '../../models/datosEncargado';
import { DatosEncargadoService } from '../../services/datos-encargado.service';

@Component({
  selector: 'app-datos-encargado-tabla',
  templateUrl: './datos-encargado-tabla.component.html',
  styleUrls: ['./datos-encargado-tabla.component.css']
})
export class DatosEncargadoTablaComponent implements OnInit {

  tablaDatosEncargado: DatosEncargado[] = [];

  constructor(private _datosEncargadoService: DatosEncargadoService) { }

  ngOnInit(): void {
    this.getDatosEncargado();
  }

  getDatosEncargado() {
    this._datosEncargadoService.getDatosEncargado().subscribe(data => {
      console.log(data);
      this.tablaDatosEncargado = data;
    }, error => {
      console.log(error);
    })
  }

  deleteDatosEncargado(id: any){
    this._datosEncargadoService.deleteDatosEncargado(id).subscribe(data => {
      this.getDatosEncargado();
    }, error => {
      console.log(error)
    })
  }
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'p') {
      event.preventDefault();
      this.print();
    }
  }

  print() {
    window.print();
  }

}
