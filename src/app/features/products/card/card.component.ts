import { CurrencyPipe, SlicePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Product } from '@shared/model/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe, SlicePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  product = input.required<Product>();
}
