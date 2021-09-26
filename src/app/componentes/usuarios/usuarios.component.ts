import { Component, OnInit } from '@angular/core';
import { USUARIOS } from 'src/app/modelos/mock-usuarios';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarios!: Usuario[];

  constructor(private usuarioservice:UsuariosService) {}

  ngOnInit(): void {
    this.get();
  }
  get(){
    this.usuarios=this.usuarioservice.get();
  }
}
