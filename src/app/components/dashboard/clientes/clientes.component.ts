import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listClientes: Cliente[] = [];


  displayedColumns: string[] = ['nombre', 'apellidoPat', 'apellidoMat', 'sexo', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _clienteService: ClienteService, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes() {
    this.listClientes = this._clienteService.getCliente();
    this.dataSource = new MatTableDataSource(this.listClientes);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarCliente(index: number) {
    console.log(index);

    this._clienteService.eliminarCliente(index);
    this.cargarClientes();

    this._snackBar.open('El Cliente fue eliminado con exito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })

  }
}
