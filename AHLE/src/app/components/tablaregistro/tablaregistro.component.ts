import { Component, OnInit, HostListener } from '@angular/core';
import { Registro } from '../../models/registro';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-tablaregistro',
  templateUrl: './tablaregistro.component.html',
  styleUrls: ['./tablaregistro.component.css']
})
export class TablaregistroComponent implements OnInit {

  tablaRegistro: Registro[] = [];

  constructor(private _registroService: RegistroService) { }

  ngOnInit(): void {
    this.getRegistros();
  }

  getRegistros() {
    this._registroService.getRegistros().subscribe(data => {
      console.log(data);
      this.tablaRegistro = data;
    }, error => {
      console.log(error);
    });
  }

  deleteRegistro(id: any){
    this._registroService.deleteRegistro(id).subscribe(data => {
      this.getRegistros();
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
