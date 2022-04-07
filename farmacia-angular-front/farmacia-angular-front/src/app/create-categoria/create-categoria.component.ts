import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-create-categoria',
  templateUrl: './create-categoria.component.html',
  styleUrls: ['./create-categoria.component.css']
})
export class CreateCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria();
  submitted = false;

  constructor(private categoriaService: CategoriaService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.categoria = new Categoria();
  }

  save() {
    this.categoria.isActive = 1;
    this.categoriaService.createCategoria(this.categoria)
      .subscribe(data => console.log(data), error => console.log(error));
    this.categoria = new Categoria();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/categorias']);
  }
}
