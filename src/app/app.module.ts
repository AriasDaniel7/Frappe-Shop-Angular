import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { NavComponent } from './nav/nav.component';
import { NuestrosProductosComponent } from './nuestros-productos/nuestros-productos.component';
import { CartsComponent } from './carts/carts.component';
import { FooterComponent } from './footer/footer.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { IconoWhatsappComponent } from './icono-whatsapp/icono-whatsapp.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    NavComponent,
    NuestrosProductosComponent,
    CartsComponent,
    FooterComponent,
    SobreNosotrosComponent,
    IconoWhatsappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
