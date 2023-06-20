import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { EscrowComponent } from './escrow/escrow.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: InicioComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'propiedades', component: PropiedadesComponent },
      { path: 'escrow', component: EscrowComponent },
      { path: 'crear-cliente', component: CrearClienteComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
