import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPasajeroPage } from './perfil-pasajero.page'; // Cambio de nombre aquí

const routes: Routes = [
  {
    path: '',
    component: PerfilPasajeroPage, // Cambio de nombre aquí
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPasajeroPageRoutingModule {}
