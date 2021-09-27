import { Injectable } from '@angular/core';
import { Respuesta } from '../modelos/respuesta';
import { Tema } from '../modelos/tema';

@Injectable({
  providedIn: 'root',
})
export class TemasService {
  post(tema: Tema) {
    let temas: Tema[] = [];
    if (this.get() != null) {
      temas = this.get();
    }
    temas.push(tema);
    localStorage.setItem('temas', JSON.stringify(temas));
  }
  get(): Tema[] {
    return JSON.parse(localStorage.getItem('temas') || '[]');
  }
  clear() {
    localStorage.removeItem('temas');
  }
  postResp(tema: Tema, respuesta: Respuesta) {
    let temas: Tema[] = [];
    if (this.get() != null) {
      temas = this.get();
    }
    var i = 0;
    while (tema.identificador != temas[i].identificador) {
      i++;
    }
    temas[i].respuestas.push(respuesta);
    localStorage.setItem('temas', JSON.stringify(temas));
  }
  clearResp(tema: Tema) {
    var respuesta: Respuesta[] = [];
    let temas: Tema[] = [];
    if (this.get() != null) {
      temas = this.get();
    }
    var i = 0;
    while (tema.identificador != temas[i].identificador) {
      i++;
    }
    temas[i].respuestas = respuesta;
    localStorage.setItem('temas', JSON.stringify(temas));
  }
  constructor() {}
}
