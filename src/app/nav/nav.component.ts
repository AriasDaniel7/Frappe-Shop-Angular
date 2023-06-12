import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  abrirMenu() {
    const navbar = this.elementRef.nativeElement.querySelector('.navbar');
    const icono1 = this.elementRef.nativeElement.querySelector('.navbar-icon .bi-list');
    const icono2 = this.elementRef.nativeElement.querySelector('.navbar-icon .bi-x-lg');
    this.renderer.addClass(navbar, 'navbar-open');
    this.renderer.setStyle(icono1, 'display', 'none');
    this.renderer.setStyle(icono2, 'display', 'block');
  }

  cerrarMenu() {
    const navbar = this.elementRef.nativeElement.querySelector('.navbar');
    const icono1 = this.elementRef.nativeElement.querySelector('.navbar-icon .bi-list');
    const icono2 = this.elementRef.nativeElement.querySelector('.navbar-icon .bi-x-lg');
    this.renderer.removeClass(navbar, 'navbar-open');
    this.renderer.setStyle(icono1, 'display', 'block');
    this.renderer.setStyle(icono2, 'display', 'none');
  }
}
