import { Component, Input, Output, EventEmitter } from '@angular/core';

// Definición de la interfaz (la puedes poner aquí o importarla)
interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  
  // 1. INPUT: Recibe un objeto Producto del Padre.
  @Input() product: Product = { id: 0, name: 'N/A', price: 0 };
  
  // 2. OUTPUT: Emite el ID del producto cuando se añade al carrito.
  @Output() addedToCart = new EventEmitter<number>(); 
  
  addToCart() {
    // 3. Emite el evento, enviando el ID del producto para que el Padre sepa cuál añadir.
    this.addedToCart.emit(this.product.id);
  }
}