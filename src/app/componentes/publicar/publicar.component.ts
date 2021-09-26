import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tema } from 'src/app/modelos/tema';
import { Usuario } from 'src/app/modelos/usuario';
import { LogusuarioService } from 'src/app/servicios/logusuario.service';
import { TemasService } from 'src/app/servicios/temas.service';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css'],
})
export class PublicarComponent implements OnInit {
  tema!: Tema;
  logusuario!: Usuario[];
  temas!: Tema[];
  fecha = new Date().toLocaleDateString();
  constructor(
    private temaservice: TemasService,
    private logusuarioservice: LogusuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tema = new Tema();
    this.getLogU();
    this.getTemas();
  }
  getTemas() {
    this.temas = this.temaservice.get();
  }
  getLogU() {
    this.logusuario = this.logusuarioservice.get();
  }
  add() {
    if (this.tema.titulo != undefined && this.tema.contenido != undefined) {
      this.tema.usuario = this.logusuario[0];
      this.tema.fechapub=this.fecha;
      alert(this.tema.contenido+this.tema.fechapub+this.tema.titulo+this.tema.usuario.nusuario+this.tema.usuario.fechareg+'as');
      /*this.temaservice.post(this.tema);
      this.router.navigate(['/foro']);*/
    } else alert('Llene todos los campos');
  }
}
