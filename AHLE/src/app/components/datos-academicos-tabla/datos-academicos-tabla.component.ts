import { Component, HostListener, OnInit } from '@angular/core';
import { DatosAcademicos } from '../../models/datosAcademicos';
import { DatosAcademicosService } from '../../services/datos-academicos.service';

@Component({
  selector: 'app-datos-academicos-tabla',
  templateUrl: './datos-academicos-tabla.component.html',
  styleUrls: ['./datos-academicos-tabla.component.css']
})
export class DatosAcademicosTablaComponent implements OnInit {

  tablaDatosAcademicos: DatosAcademicos[] = [];

  constructor(private _datosAcademicosService: DatosAcademicosService) { }

  ngOnInit(): void {
    this.getDatosAcademicos();
  }

  getDatosAcademicos() {
    this._datosAcademicosService.getDatosAcademicos().subscribe(data => {
      console.log(data);
      this.tablaDatosAcademicos = data;
    }, error => {
      console.log(error);
    })
  }

  deleteDatosAcademicos(id: any){
    this._datosAcademicosService.deleteDatosAcademicos(id).subscribe(data => {
      this.getDatosAcademicos();
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
