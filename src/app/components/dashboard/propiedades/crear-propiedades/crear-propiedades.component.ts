import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Propiedad } from 'src/app/interfaces/propiedad';
import { PropiedadService } from 'src/app/services/propiedad.service';

@Component({
  selector: 'app-crear-propiedades',
  templateUrl: './crear-propiedades.component.html',
  styleUrls: ['./crear-propiedades.component.css']
})
export class CrearPropiedadesComponent implements OnInit {

  tipoPropiedad: any[] = ['Casa', 'Departamento', 'Comercio', 'Terreno', 'Bodega/Nave', 'Suit', 'Campestre/Rancho', 'Oficina', 'Edificio'];
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _propiedadesService: PropiedadService,
    private router: Router,
    private _snackBar: MatSnackBar) {

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      costoPropiedad: ['', Validators.required],
      tipoPropiedad: ['', Validators.required],
    })

  }

  ngOnInit(): void {
  }

  agregarPropiedad() {

    const propiedad: Propiedad = {
      nombre: this.form.value.nombre,
      direccion: this.form.value.direccion,
      costoPropiedad: this.form.value.costoPropiedad,
      tipoPropiedad: this.form.value.tipoPropiedad,
    }
    this._propiedadesService.agregarPropiedad(propiedad);
    this.router.navigate(["/dashboard/propiedades"]);
    this._snackBar.open('El Cliente fue Agregado con exito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
