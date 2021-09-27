import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/modelos/respuesta';
import { Tema } from 'src/app/modelos/tema';
import { Usuario } from 'src/app/modelos/usuario';
import { LogusuarioService } from 'src/app/servicios/logusuario.service';
import { TemasService } from 'src/app/servicios/temas.service';
import { TemitaService } from 'src/app/servicios/temita.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css'],
})
export class TemasComponent implements OnInit {
  constructor(
    private temitaservice: TemitaService,
    private logusuarioservice: LogusuarioService,
    private temaservice: TemasService,
    private router: Router
  ) {}

  temitas!: Tema[];
  tema!: Tema;
  respuestas!: Respuesta[];
  respuestaC!: Respuesta;
  logusuario!: Usuario[];

  ngOnInit(): void {
    this.getTemitas();
    this.respuestaC = new Respuesta();
    this.tema = this.temitas[0];
    this.respuestas = this.tema.respuestas;
    this.logusuario = this.logusuarioservice.get();
  }
  getTemitas() {
    this.temitas = this.temitaservice.get();
  }
  responder() {
    if (this.respuestaC.contenido != undefined) {
      //this.temaservice.clearResp(this.tema);

      //  alert(this.tema.identificador);
      this.respuestaC.usuario = this.logusuario[0];
      this.respuestaC.fechapub = new Date().toLocaleDateString();
      this.temaservice.postResp(this.tema, this.respuestaC);
      this.router.navigate(['/foro']);
    } else {
      alert('Escriba su respuesta');
    }
  }
}
