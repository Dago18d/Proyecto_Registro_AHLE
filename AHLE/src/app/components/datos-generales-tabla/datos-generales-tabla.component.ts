import { Component, HostListener, OnInit } from '@angular/core';
import { DatosGenerales } from '../../models/datosGenerales';
import { DatosGeneralesService } from '../../services/datos-generales.service';
import { ExInternosService } from '../../services/ex-internos.service';

@Component({
  selector: 'app-datos-generales-tabla',
  templateUrl: './datos-generales-tabla.component.html',
  styleUrls: ['./datos-generales-tabla.component.css']
})
export class DatosGeneralesTablaComponent implements OnInit {

  tablaDatosGenerales: DatosGenerales[] = [];

  constructor(
    private _datosGeneralesService: DatosGeneralesService,
    private _exInternosService: ExInternosService
  ) { }

  ngOnInit(): void {
    this.getDatosGenerales();
  }

  getDatosGenerales() {
    this._datosGeneralesService.getDatosGenerales().subscribe(data => {
      console.log(data);
      this.tablaDatosGenerales = data;
    }, error => {
      console.log(error);
    });
  }

  deleteDatosGenerales(id: any){
    this._datosGeneralesService.deleteDatosGenerales(id).subscribe(data => {
      this.getDatosGenerales();
    }, error => {
      console.log(error);
    });
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

  enviarDatosExInternos(datosGenerales: DatosGenerales) {
    // Aquí llamamos al servicio ExInternosService para guardar los datos en ExInternos
    this._exInternosService.saveDatosExInternos(datosGenerales).subscribe(() => {
      console.log('Datos enviados a ExInternos:', datosGenerales);
    }, error => {
      console.error('Error al enviar datos a ExInternos:', error);
    });
  }

  mostrarMensajeEnviado() {
    // Obtener el elemento del mensaje
    var mensajeEnviado = document.getElementById("mensaje-enviado");

    // Mostrar el mensaje en la pantalla
    if (mensajeEnviado) {
      // Si el elemento existe, mostrar el mensaje y programar su ocultación
      mensajeEnviado.style.display = "block";

      setTimeout(function() {
        if (mensajeEnviado) {
          mensajeEnviado.style.display = "none";
        }
      }, 3000); // 3000 milisegundos = 3 segundos
    } else {
      // Si el elemento no existe, mostrar el mensaje de error directamente en la consola
      console.error("Elemento 'mensaje-enviado' no encontrado. Datos enviados.");
    }
  }



}
