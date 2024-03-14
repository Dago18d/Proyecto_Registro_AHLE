import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosAcademicos } from '../models/datosAcademicos';


@Injectable({
  providedIn: 'root'
})
export class DatosAcademicosService {

  getDatoAcademico(id: string) {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:3000/api/datosAcademicos/';

  constructor(private http:HttpClient) { }

  getDatosAcademicos(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteDatosAcademicos(id:string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveDatosAcademicos(datosAcademicos:DatosAcademicos): Observable<any> {
    return this.http.post(this.url, datosAcademicos);
  }

  getADatosAcademicos(id:string): Observable<any> {
    return this.http.get(this.url + id);
  }

  updateDatosAcademicos(id:string, datosAcademicos:DatosAcademicos): Observable<any> {
    return this.http.put(this.url + id, datosAcademicos);
  }
}
