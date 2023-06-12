import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuestrosProductosComponent } from './nuestros-productos/nuestros-productos.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  {
    path: 'productos',
    title: 'Nuestros Productos',
    component: NuestrosProductosComponent
  },
  {
    path: '',
    title: 'Frappe Shop',
    component: PaginaPrincipalComponent
  },
  {
    path: 'sobreNosotros',
    title: 'Sobre Nosotros',
    component: SobreNosotrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
