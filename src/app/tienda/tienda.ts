import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card'; // Importar el Componente Hijo

// Definición de la interfaz (o importarla si la pusiste en otro archivo)
interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [ProductCard], // Importar el componente Hijo para usarlo en el template
  templateUrl: './tienda.html',
  styleUrl: './tienda.css'
})
export class Tienda {
  
  cartCount: number = 0; // Estado del carrito
  
  products: Product[] = [
    { id: 1, name: 'Taza Angular', price: 15.99 },
    { id: 2, name: 'Sticker TypeScript', price: 3.50 },
    { id: 3, name: 'Gorra NG', price: 29.99 }
  ];

  // Método que escucha el @Output del Hijo
  handleAddToCart(productId: number) {
    this.cartCount++; // Actualizamos el estado del Padre
    console.log(`Producto con ID ${productId} añadido al carrito.`);
  }
}