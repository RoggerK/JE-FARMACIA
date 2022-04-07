import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl = 'http://localhost:8095/rest/producto';

  constructor(private http: HttpClient) {}

  detalleProductoIdSp(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/sp/${id}`);
  }

  detalleProductoId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  crearProducto(producto: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, producto);
  }

  actualizarProducto(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  eliminarProductoId(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  listaProductoSp(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
