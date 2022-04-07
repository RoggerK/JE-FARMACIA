import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
  categorias: Observable<Categoria[]>;

  constructor(private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit() {
    console.log('entro aqui');
    this.reloadData();
  }

  reloadData() {
    this.categorias = this.categoriaService.getCategoriasList();
  }

  categoriaDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateCategoria(id: number){
    this.router.navigate(['update', id]);
  }

  deleteCategoria(id: number) {
    this.categoriaService.deleteCategoria(id)
      .subscribe(
        data => {
          this.reloadData();
        },
        error => console.log(error));
  }
}
