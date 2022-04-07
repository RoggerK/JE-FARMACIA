import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormStyle } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateCategoriaComponent } from './create-categoria/create-categoria.component';
import { UpdateCategoriaComponent } from './update-categoria/update-categoria.component';
import { CategoriaDetailsComponent } from './categoria-details/categoria-details.component';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoCrearComponent } from './producto-crear/producto-crear.component';
import { ProductoActualizarComponent } from './producto-actualizar/producto-actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaListComponent,
    CreateCategoriaComponent,
    UpdateCategoriaComponent,
    CategoriaDetailsComponent,
    ProductoListaComponent,
    ProductoDetalleComponent,
    ProductoCrearComponent,
    ProductoActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
