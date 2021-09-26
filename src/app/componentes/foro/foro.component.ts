import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tema } from 'src/app/modelos/tema';
import { TemasService } from 'src/app/servicios/temas.service';
import { TemitaService } from 'src/app/servicios/temita.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css'],
})
export class ForoComponent implements OnInit {
  temas!:Tema[];
  temitas!: Tema[];
  constructor(private router: Router, private temitaservice: TemitaService, private temasservice: TemasService) {}

  ngOnInit(): void {
    this.getTemitas();
    this.getTemas();
  }
  getTemitas() {
    this.temitas = this.temitaservice.get();
  }
  getTemas() {
    this.temas = this.temasservice.get();
  }

  onSelect(tema: Tema): void {
    this.temitaservice.clear();
    this.temitaservice.post(tema);
    this.router.navigate(['/temas']);
  }
}
