import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class LogusuarioService {

  constructor() { }



  post(usuario: Usuario) {
    let usuarios: Usuario[] = [];
    if (this.get() != null) {
      usuarios = this.get();
    }
    usuarios.push(usuario);
    localStorage.setItem('logusuarios', JSON.stringify(usuarios));
  }
  get(): Usuario[] {
    return JSON.parse(localStorage.getItem('logusuarios') || '[]');
  }
  clear() {
    localStorage.removeItem('logusuarios');
  }
}
