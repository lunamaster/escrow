import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  sexo: any[] = ['Masculino', 'Femenino'];
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _clienteService: ClienteService,
    private router: Router,
    private _snackBar: MatSnackBar) {

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellidoPat: ['', Validators.required],
      apellidoMat: ['', Validators.required],
      sexo: ['', Validators.required],
    })

  }
  ngOnInit(): void {
  }

  agregarCliente() {

    const client: Cliente = {
      nombre: this.form.value.nombre,
      apellidoPat: this.form.value.apellidoPat,
      apellidoMat: this.form.value.apellidoMat,
      sexo: this.form.value.sexo,
    }
    this._clienteService.agregarCliente(client);
    this.router.navigate(["/dashboard/clientes"]);
    this._snackBar.open('El Cliente fue Agregado con exito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
