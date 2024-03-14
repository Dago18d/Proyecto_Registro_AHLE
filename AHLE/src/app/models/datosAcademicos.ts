export class DatosAcademicos{
  _id?:number;
  Ident:string;
  nivelEducativo: string;
  ultimoGradoEscolar: string;
  institucionAnterior: string;
  areaInteres: string;

  constructor(Ident:string, nivelEducativo: string, ultimoGradoEscolar: string, institucionAnterior: string, areaInteres: string){

    this.Ident = Ident;
    this.nivelEducativo = nivelEducativo;
    this.ultimoGradoEscolar = ultimoGradoEscolar;
    this.institucionAnterior = institucionAnterior;
    this.areaInteres = areaInteres;
  }
}
