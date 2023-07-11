import { Injectable } from '@angular/core';
import { Propiedad } from '../interfaces/propiedad';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {

  listPropiedades: Propiedad[] = [
    { nombre: "Torre 3, UpTown ", direccion: "Queretaro, Juriquilla", costoPropiedad: "$10,000,000", tipoPropiedad: "Edificio" },
    { nombre: "nave 2", direccion: "Queretaro 2", costoPropiedad: "$10,001", tipoPropiedad: "Nave Industrial" },
    { nombre: "nave 3", direccion: "Queretaro 3", costoPropiedad: "$10,002", tipoPropiedad: "Nave Industrial" },
  ];

  constructor() { }

  getPropiead() {
    return this.listPropiedades.slice();
  }

  eliminarPropiedad(index: number) {
    this.listPropiedades.splice(index, 1);
  }

  agregarPropiedad(propiedad: Propiedad) {
    this.listPropiedades.unshift(propiedad);
  }
}
