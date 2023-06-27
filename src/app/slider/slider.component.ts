import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Autoplay, SwiperOptions } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent {

  config: SwiperOptions = {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      680: {
        slidesPerView: 3
      },
      800: {
        slidesPerView: 4
      },
      0: {
        slidesPerView: 1
      }
    }
  }

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
