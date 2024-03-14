import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosEncargado } from '../models/datosEncargado';

@Injectable({
  providedIn: 'root'
})
export class DatosEncargadoService {

  getDatoEncargado(id: string) {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:3000/api/datosEncargado/';

  constructor(private http:HttpClient) { }

  getDatosEncargado(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteDatosEncargado(id:string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveDatosEncargado(datosEncargado:DatosEncargado): Observable<any> {
    return this.http.post(this.url, datosEncargado);
  }

  getADatosEncargado(id:string): Observable<any> {
    return this.http.get(this.url + id);
  }

  updateDatosEncargado(id:string, datosEncargado:DatosEncargado): Observable<any> {
    return this.http.put(this.url + id, datosEncargado);
  }
}

