import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosClinicos } from '../models/datosClinicos';


@Injectable({
  providedIn: 'root'
})
export class DatosClinicosService {

  getDatoClinico(id: string) {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:3000/api/datosClinicos/';

  constructor(private http:HttpClient) { }

  getDatosClinicos(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteDatosClinicos(id:string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveDatosClinicos(datosClinicos:DatosClinicos): Observable<any> {
    return this.http.post(this.url, datosClinicos);
  }

  getADatosClinicos(id:string): Observable<any> {
    return this.http.get(this.url + id);
  }

  updateDatosClinicos(id:string, datosClinicos:DatosClinicos): Observable<any> {
    return this.http.put(this.url + id, datosClinicos);
  }
}
