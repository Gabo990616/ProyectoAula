import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  post(usuario: Usuario) {
    let usuarios: Usuario[] = [];
    if (this.get() != null) {
      usuarios = this.get();
    }
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }
  get(): Usuario[] {
    return JSON.parse(localStorage.getItem('usuarios') || '[]');
  }
  clear() {
    localStorage.removeItem('usuarios');
  }
  constructor() { }
}
