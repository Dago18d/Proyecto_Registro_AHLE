import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosExInternos } from '../models/exInternos';

@Injectable({
  providedIn: 'root'
})
export class ExInternosService {

  getDatoGeneral(id: string) {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:3000/api/exInternos/';

  constructor(private http:HttpClient) { }

  getDatosExInternos(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteDatosExInternos(id:string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveDatosExInternos(DatosExInternos:DatosExInternos): Observable<any> {
    return this.http.post(this.url, DatosExInternos);
  }

  getADatosExInternos(id:string): Observable<any> {
    return this.http.get(this.url + id);
  }

  updateDatosExInternos(id:string, DatosExInternos:DatosExInternos): Observable<any> {
    return this.http.put(this.url + id, DatosExInternos);
  }
}
