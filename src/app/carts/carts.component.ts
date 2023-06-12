import { Component } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent {
  frappes = [
    {
      nombre: 'Frappe de milo',
      precio: '4500',
      img: 'frappe-milo.webp',
      descripcion: "Frappé de milo - Frappe's Malu"
    },
    {
      nombre: 'Frappe de café',
      precio: '4500',
      img: 'frappe-cafe.webp',
      descripcion: "Frappé de café - Frappe's Malu"
    },
    {
      nombre: 'Frappe de oreo',
      precio: '8000',
      img: 'frappe-1.jpg',
      descripcion: "Frappé de oreo - Frappe's Malu"
    },
    {
      nombre: 'Frappe de milo',
      precio: '4500',
      img: 'frappe-milo.webp',
      descripcion: "Frappé de milo - Frappe's Malu"
    },
    {
      nombre: 'Frappe de café',
      precio: '4500',
      img: 'frappe-cafe.webp',
      descripcion: "Frappé de café - Frappe's Malu"
    },
    {
      nombre: 'Frappe de oreo',
      precio: '8000',
      img: 'frappe-1.jpg',
      descripcion: "Frappé de oreo - Frappe's Malu"
    }
  ]
}
