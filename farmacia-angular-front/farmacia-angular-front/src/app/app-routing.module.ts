import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CreateCategoriaComponent } from './create-categoria/create-categoria.component';
import { CategoriaDetailsComponent } from './categoria-details/categoria-details.component';
import { UpdateCategoriaComponent } from './update-categoria/update-categoria.component';

import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoCrearComponent } from './producto-crear/producto-crear.component';
import { ProductoActualizarComponent } from './producto-actualizar/producto-actualizar.component';

const routes: Routes = [
  { path: '', redirectTo: 'categoria', pathMatch: 'full' },
  { path: 'categorias', component: CategoriaListComponent },
  { path: 'add', component: CreateCategoriaComponent },
  { path: 'details/:id', component: CategoriaDetailsComponent },
  { path: 'update/:id', component: UpdateCategoriaComponent },
  { path: 'productos', component: ProductoListaComponent },
  { path: 'productosCrea', component: ProductoCrearComponent },
  { path: 'detallePro/:id', component: ProductoDetalleComponent },
  { path: 'actualizarPro/:id', component: ProductoActualizarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
