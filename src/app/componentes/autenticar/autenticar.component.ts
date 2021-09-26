import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { LogusuarioService } from 'src/app/servicios/logusuario.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-autenticar',
  templateUrl: './autenticar.component.html',
  styleUrls: ['./autenticar.component.css'],
})
export class AutenticarComponent implements OnInit {
  usuario!: Usuario;
  usuarios!: Usuario[];
  constructor(
    private usuarioService: UsuariosService,
    private router: Router,
    private logusuarioservice:LogusuarioService
  ) {}

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.get();
  }
  get() {
    this.usuarios = this.usuarioService.get();
  }
  entrar() {
    var i = 0;
    var cont = true;

    if (
      this.usuario.nusuario != undefined &&
      this.usuario.password != undefined
    ) {
      if (this.usuario.password != '' && this.usuario.nusuario != '') {
        while (
          i < this.usuarios.length &&
          (this.usuario.nusuario != this.usuarios[i].nusuario ||
            this.usuario.password != this.usuarios[i].password)
        ) {
          i++;

          if (i == this.usuarios.length) {
            cont = false;
          }
        }
        if (cont) {
          this.logusuarioservice.clear();
          this.logusuarioservice.post(this.usuarios[i]);
          this.router.navigate(['/']);
        } else {
          alert('El usuario o la contraseña son incorrectos');
        }
      } else {
        alert('Llene los campos para ingresar');
        this.usuario.password = '';
        this.usuario.nusuario = '';
      }
    } else {
      alert('Llene los campos para ingresar');
      this.usuario.password = '';
      this.usuario.nusuario = '';
    }
  }
}
