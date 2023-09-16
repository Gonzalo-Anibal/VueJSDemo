import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {
  productos = [
    { nombre: 'Producto 1', precio: 19.99 },
    { nombre: 'Producto 2', precio: 29.99 },
    { nombre: 'Producto 3', precio: 9.99 }
  ];

  calcularTotal() {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }
}
