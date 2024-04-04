import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Product } from '@shared/model/product.interface';
import { environment } from 'environments/environment.development';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  //get product
  public products = signal<Product[]>([]);
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiUrl;

  constructor() {
    this.getProducts();
  }
  public getProducts(): void {
    this._http
      .get<Product[]>(`${this._endPoint}/products/?sort=desc`)
      .pipe(tap((data: Product[]) => this.products.set(data)))
      .subscribe();
  }
  //getProductById
  public getProductById(id: number) {
    return this._http.get<Product>(`${this._endPoint}/products/${id}`);
  }
}
