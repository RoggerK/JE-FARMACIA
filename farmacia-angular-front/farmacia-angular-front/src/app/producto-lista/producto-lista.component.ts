import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

//CLASE Y SERVICIO
import { ProductoService } from './../producto.service';
import { ProductoSp } from './../producto-sp';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit {
  productoSp: Observable<ProductoSp[]>;

  constructor(private productoService: ProductoService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.productoSp = this.productoService.listaProductoSp();
  }

  productoEliminar(id: number) {
    this.productoService.eliminarProductoId(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  productoDetalle(id: number){
    this.router.navigate(['detallePro', id]);
  }

  productoActualizar(id: number){
    this.router.navigate(['actualizarPro', id]);
  }

}
