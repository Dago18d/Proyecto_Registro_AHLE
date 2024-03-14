import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from '../models/datosGenerales';

@Injectable({
  providedIn: 'root'
})
export class DatosGeneralesService {

  getDatoGeneral(id: string) {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:3000/api/datosGenerales/';

  constructor(private http:HttpClient) { }

  getDatosGenerales(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteDatosGenerales(id:string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveDatosGenerales(datosGenerales:DatosGenerales): Observable<any> {
    return this.http.post(this.url, datosGenerales);
  }

  getADatosGenerales(id:string): Observable<any> {
    return this.http.get(this.url + id);
  }

  updateDatosGenerales(id:string, datosGenerales:DatosGenerales): Observable<any> {
    return this.http.put(this.url + id, datosGenerales);
  }
}
