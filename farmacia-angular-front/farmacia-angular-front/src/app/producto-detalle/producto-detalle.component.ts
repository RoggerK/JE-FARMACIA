import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductoService } from './../producto.service';
import { ProductoSp } from './../producto-sp';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  id: number;
  producto: ProductoSp;

  constructor(private route: ActivatedRoute,private router: Router,
    private productoService: ProductoService) { }

  ngOnInit() {
    this.producto = new ProductoSp();

    this.id = this.route.snapshot.params['id'];
    
    this.productoService.detalleProductoIdSp(this.id)
      .subscribe(data => {
        console.log(data)
        this.producto = data;
      }, error => console.log(error));
  }

  lista(){
    this.router.navigate(['/productos']);
  }

}
