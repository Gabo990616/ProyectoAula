import { Injectable } from '@angular/core';
import { Tema } from '../modelos/tema';

@Injectable({
  providedIn: 'root'
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

  constructor() { }
}
