export class DatosExInternos{
  _id?:number;
  Ident:string;
  nombre: string;
  identidad: string;
  fechaNacimiento: string;
  edad: string;
  tallaRopa: string;
  tallaZapato: string;
  discapacidad: string;
  motivoSalida: string;


  constructor(Ident:string, nombre: string, identidad: string, fechaNacimiento: string, edad: string, tallaRopa: string, tallaZapato: string, discapacidad: string, motivoSalida: string){

    this.Ident = Ident;
    this.nombre = nombre;
    this.identidad = identidad;
    this.fechaNacimiento = fechaNacimiento;
    this.edad = edad;
    this.tallaRopa= tallaRopa;
    this.tallaZapato= tallaZapato;
    this.discapacidad= discapacidad;
    this.motivoSalida= motivoSalida;

  }
}
