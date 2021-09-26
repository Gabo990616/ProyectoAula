import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticarComponent } from './componentes/autenticar/autenticar.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ForoComponent } from './componentes/foro/foro.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PublicarComponent } from './componentes/publicar/publicar.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TemasComponent } from './componentes/temas/temas.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'foro', component: ForoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'autenticar', component: AutenticarComponent },
  { path: 'publicar', component: PublicarComponent },
  { path: 'temas', component: TemasComponent },
  { path: 'menu', component: EncabezadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
