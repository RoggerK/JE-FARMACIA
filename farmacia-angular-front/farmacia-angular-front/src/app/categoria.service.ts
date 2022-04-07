import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
   providedIn: "root", 
})
export class CategoriaService {

    private baseUrl = "http://localhost:8095/rest/categoria";

    constructor(private http: HttpClient) {}

    getCategoria(id: number): Observable<any>{
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    createCategoria(categoria: Object): Observable<Object>{
        return this.http.post(`${this.baseUrl}`, categoria);
    }

    updateCategoria(id: number,value: any): Observable<Object>{
        return this.http.put(`${this.baseUrl}/${id}`, value);  
    }

    deleteCategoria(id: number): Observable<any>{
       return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getCategoriasList(): Observable<any> {
        return this.http.get(this.baseUrl);
    }
}