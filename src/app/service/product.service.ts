import { Injectable } from '@angular/core';
import {environment} from "../../environments/enviroment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";

const API_URL=`${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/products');
  }

  findById(id: number) {
    return this.http.get<Product>(`${API_URL}/products/${id}`);
  }

  save(product: Product): Observable<Product> {
    return this.http.post<Product>(API_URL + `/products`, product);
  }

  edit(id: number, product: Product) {
    return this.http.put<Product>(`${API_URL}/products/${id}`, product);
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/products/${id}`);
  }
}