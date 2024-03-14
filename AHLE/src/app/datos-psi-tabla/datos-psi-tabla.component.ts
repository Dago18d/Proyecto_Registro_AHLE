import { Component, HostListener, OnInit } from '@angular/core';
import { DatosPsi } from '../models/datosPsi';
import { DatosPsiService } from '../services/datos-psi.service';

@Component({
  selector: 'app-datos-psi-tabla',
  templateUrl: './datos-psi-tabla.component.html',
  styleUrls: ['./datos-psi-tabla.component.css']
})
export class DatosPsiTablaComponent implements OnInit {
  tablaDatosPsi: DatosPsi[] = [];

  constructor(private _datosPsi: DatosPsiService) { }

  ngOnInit(): void {
    this.getDatosPsi();
  }

  getDatosPsi() {
    this._datosPsi.getDatosPsi().subscribe(data => {
      console.log(data);
      this.tablaDatosPsi = data;
    }, error => {
      console.log(error);
    })
  }

  deleteDatosPsi(id: any){
    this._datosPsi.deleteDatosPsi(id).subscribe(data => {
      this.getDatosPsi();
    }, error => {
      console.log(error)
    })
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
