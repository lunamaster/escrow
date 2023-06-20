import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  listClientes: Cliente[] = [
    { nombre: "Victor Hugo", apellidoPat: 'Luna', apellidoMat: "Cortes", sexo: 'Masculino' },
    { nombre: "Juan Gerardo", apellidoPat: 'Manzano', apellidoMat: "Garcia", sexo: 'Masculino' },
    { nombre: "Juan", apellidoPat: 'Luna', apellidoMat: "Martinez", sexo: 'Masculino' },
    { nombre: "Gerardo", apellidoPat: 'Escalona', apellidoMat: "Salazar", sexo: 'Masculino' },
    { nombre: "Jorge", apellidoPat: 'Garcia', apellidoMat: "Salazar", sexo: 'Masculino' },
    { nombre: "Victor Hugo", apellidoPat: 'Luna', apellidoMat: "Cortes", sexo: 'Masculino' },
    { nombre: "Juan Gerardo", apellidoPat: 'Manzano', apellidoMat: "Garcia", sexo: 'Masculino' },
    { nombre: "Juan", apellidoPat: 'Luna', apellidoMat: "Martinez", sexo: 'Masculino' },
    { nombre: "Gerardo", apellidoPat: 'Escalona', apellidoMat: "Salazar", sexo: 'Masculino' },
    { nombre: "Jorge", apellidoPat: 'Garcia', apellidoMat: "Salazar", sexo: 'Masculino' },
  ];

  constructor() { }

  getCliente() {
    return this.listClientes.slice();
  }

  eliminarCliente(index: number) {
    this.listClientes.splice(index, 1);
  }

  agregarCliente(cliente: Cliente) {
    this.listClientes.unshift(cliente);
  }
}
