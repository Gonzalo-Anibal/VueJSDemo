import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  nombre = 'Producto Ejemplo';
  precio = 49.99;
  descripcion = 'Este es un producto de ejemplo para demostrar la creación de un componente en Angular.';
}