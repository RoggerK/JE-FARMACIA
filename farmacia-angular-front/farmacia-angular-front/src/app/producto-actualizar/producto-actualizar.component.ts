import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Productos } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-actualizar',
  templateUrl: './producto-actualizar.component.html',
  styleUrls: ['./producto-actualizar.component.css']
})
export class ProductoActualizarComponent implements OnInit {

  id: number;
  producto: Productos;

  constructor(private route: ActivatedRoute,private router: Router,
    private productoService: ProductoService) { }

  ngOnInit() {
    this.producto = new Productos();

    this.id = this.route.snapshot.params['id'];
    
    this.productoService.detalleProductoId(this.id)
      .subscribe(data => {
        console.log(data)
        this.producto = data;
      }, error => console.log(error));
  }

  actualizarProducto() {
    this.productoService.actualizarProducto(this.id, this.producto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.producto = new Productos();
    this.gotoList();
  }

  onSubmit() {
    this.actualizarProducto();    
  }

  gotoList() {
    this.router.navigate(['/productos']);
  }

}
