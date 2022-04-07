import { Component, OnInit } from '@angular/core';
import { Productos } from '../producto';
import { ProductoService } from './../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-crear',
  templateUrl: './producto-crear.component.html',
  styleUrls: ['./producto-crear.component.css']
})
export class ProductoCrearComponent implements OnInit {

  producto: Productos = new Productos();
  submitted = false;

  constructor(private productoService: ProductoService,
    private router: Router) { }

  ngOnInit() {
  }

  crearProducto(): void {
    this.submitted = false;
    this.producto = new Productos();
  }

  guardar() {
    this.productoService.crearProducto(this.producto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.producto = new Productos();
    this.volverLista();
  }

  onSubmit() {
    this.submitted = true;
    this.guardar();    
  }

  volverLista() {
    this.router.navigate(['/productos']);
  }

}
