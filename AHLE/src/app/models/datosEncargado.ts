export class DatosEncargado{
  _id?:number;
  Ident:string;
  nombre: string;
  telefono: string;
  edad: string;
  correo: string;
  profesion: string;

  constructor(Ident: string,nombre: string, telefono: string, edad: string, correo: string, profesion: string) {

    this.Ident = Ident;
    this.nombre = nombre;
    this.telefono = telefono;
    this.edad = edad;
    this.correo = correo;
    this.profesion = profesion;

  }
}
