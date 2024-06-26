import { HttpClient } from '@angular/common/http';
import {
  EnvironmentInjector,
  Injectable,
  inject,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { Product } from '@shared/model/product.interface';
import { environment } from 'environments/environment.development';
import { tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  //get product
  public products = signal<Product[]>([]);
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiUrl;
  private readonly _injector = inject(EnvironmentInjector);
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
    return runInInjectionContext(this._injector, () =>
      toSignal<Product>(
        this._http.get<Product>(`${this._endPoint}/products/${id}`)
      )
    );
  }
}
