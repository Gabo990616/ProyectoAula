import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  usuario!: Usuario;
  repetir!: string;
  fecha = new Date().toLocaleDateString();
  constructor(
    private usuarioService: UsuariosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuario = new Usuario();
  }
  registrar() {
    if (
      this.usuario.nusuario != undefined &&
      this.usuario.password != undefined &&
      this.usuario.nombre != undefined &&
      this.repetir != undefined &&
      this.usuario.pais != undefined &&
      this.usuario.universidad != undefined &&
      this.usuario.email != undefined
    ) {
      if (this.usuario.password === this.repetir) {
        this.usuario.fechareg = this.fecha;
        this.usuarioService.post(this.usuario);
        this.router.navigate(['/autenticar']);
      } else alert('Las contraseñas no coinciden');
    } else alert('Llene todos los campos');
  }
}
