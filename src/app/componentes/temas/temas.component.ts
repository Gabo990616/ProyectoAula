import { Component, Input, OnInit } from '@angular/core';
import { USUARIOS } from 'src/app/modelos/mock-usuarios';
import { Tema } from 'src/app/modelos/tema';
import { Usuario } from 'src/app/modelos/usuario';
import { LogusuarioService } from 'src/app/servicios/logusuario.service';
import { TemitaService } from 'src/app/servicios/temita.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css'],
})
export class TemasComponent implements OnInit {
  constructor(
    private temitaservice: TemitaService,
    private logusuarioservice: LogusuarioService
  ) {}

  temitas!: Tema[];
  tema!: Tema;

  logusuario!: Usuario[];
  ngOnInit(): void {
    this.getTemitas();
    this.tema = this.temitas[0];
  }
  getTemitas() {
    this.temitas = this.temitaservice.get();
  }
}
