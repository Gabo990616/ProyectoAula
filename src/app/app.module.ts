import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticarComponent } from './componentes/autenticar/autenticar.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ForoComponent } from './componentes/foro/foro.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PieComponent } from './componentes/pie/pie.component';
import { PublicarComponent } from './componentes/publicar/publicar.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TemasComponent } from './componentes/temas/temas.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TemasComponent,
    RegistroComponent,
    AutenticarComponent,
    PublicarComponent,
    ForoComponent,
    PieComponent,
    EncabezadoComponent,
    UsuariosComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
