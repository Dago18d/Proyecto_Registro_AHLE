import { Component, HostListener, OnInit } from '@angular/core';
import { DatosClinicos } from '../../models/datosClinicos';
import { DatosClinicosService } from '../../services/datos-clinicos.service';

@Component({
  selector: 'app-datos-clinicos-tabla',
  templateUrl: './datos-clinicos-tabla.component.html',
  styleUrls: ['./datos-clinicos-tabla.component.css']
})
export class DatosClinicosTablaComponent implements OnInit {

  tablaDatosClinicos: DatosClinicos[] = [];

  constructor(private _datosClinicosService: DatosClinicosService) { }

  ngOnInit(): void {
    this.getDatosClinicos();
  }

  getDatosClinicos() {
    this._datosClinicosService.getDatosClinicos().subscribe(data => {
      console.log(data);
      this.tablaDatosClinicos = data;
    }, error => {
      console.log(error);
    })
  }

  deleteDatosClinicos(id: any){
    this._datosClinicosService.deleteDatosClinicos(id).subscribe(data => {
      this.getDatosClinicos();
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
