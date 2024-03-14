export class DatosClinicos{
  _id?:number;
  Ident:string;
  alergias: string;
  padecimiento: string;
  medicamentos: string;
  contactoEmergencia: string;

  constructor(Ident: string,alergias: string, padecimiento: string, medicamentos: string, contactoEmergencia: string){

    this.Ident = Ident;
    this.alergias = alergias;
    this.padecimiento = padecimiento;
    this.medicamentos = medicamentos;
    this.contactoEmergencia = contactoEmergencia;
  }
}
