import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosClinicos } from '../models/datosClinicos';
import { DatosPsi } from '../models/datosPsi';

@Injectable({
  providedIn: 'root'
})
export class DatosPsiService {

  getDatoPsi(id: string) {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:3000/api/datosPsi/';

  constructor(private http:HttpClient) { }

  getDatosPsi(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteDatosPsi(id:string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveDatosPsi(datosPsi:DatosPsi): Observable<any> {
    return this.http.post(this.url, datosPsi);
  }

  getADatosPsi(id:string): Observable<any> {
    return this.http.get(this.url + id);
  }

  updateDatosPsi(id:string, datosPsi:DatosPsi): Observable<any> {
    return this.http.put(this.url + id, datosPsi);
  }
}

