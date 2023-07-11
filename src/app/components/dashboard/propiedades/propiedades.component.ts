import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Propiedad } from 'src/app/interfaces/propiedad';
import { PropiedadService } from 'src/app/services/propiedad.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent implements OnInit {

  listPropiedades: Propiedad[] = [];

  displayedColumns: string[] = ['nombre', 'direccion', 'costoPropiedad', 'tipoPropiedad', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _propiedadService: PropiedadService, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.cargarPropiedades();
  }

  cargarPropiedades() {
    this.listPropiedades = this._propiedadService.getPropiead();
    this.dataSource = new MatTableDataSource(this.listPropiedades);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarPropiedad(index: number) {
    console.log(index);

    this._propiedadService.eliminarPropiedad(index);
    this.cargarPropiedades();

    this._snackBar.open('La propiedad fue eliminado con exito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })

  }

}
