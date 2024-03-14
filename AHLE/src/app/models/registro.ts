export class Registro{
  _id?:number;
  Ident: string;
  nombre: string;
  motivo: string;
  referencias: string;
  encargado: string;
  ubicacion: string;

  constructor(Ident: string,nombre: string, motivo: string, referencias: string, encargado: string, ubicacion: string) {
    this.Ident = Ident;
    this.nombre = nombre;

    this.motivo = motivo;
    this.referencias = referencias;
    this.encargado = encargado;
    this.ubicacion = ubicacion;
  }
}
