import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarCodeudorComponent } from './components/codeudor/actualizar-codeudor/actualizar-codeudor.component';
import { CrearCodeudorComponent } from './components/codeudor/crear-codeudor/crear-codeudor.component';
import { MostrarCodeudorComponent } from './components/codeudor/mostrar-codeudor/mostrar-codeudor.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  {
    path: "codeudor",
    component: MostrarCodeudorComponent
  },
  {
    path: "addcodeudor",
    component: CrearCodeudorComponent
  },
  {
    path: "codeudor/edit/:id",
    component: ActualizarCodeudorComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
