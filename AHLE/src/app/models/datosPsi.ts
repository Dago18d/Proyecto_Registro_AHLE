export class DatosPsi{
  _id?:number;
  Ident:string;
  comportamientos: string;
  trastornos: string;


  constructor(Ident:string, comportamientos: string, trastornos: string){

    this.Ident = Ident;
    this.comportamientos = comportamientos;
    this.trastornos = trastornos;

  }
}
