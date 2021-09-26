import { Injectable } from '@angular/core';
import { Tema } from '../modelos/tema';

@Injectable({
  providedIn: 'root'
})
export class TemitaService {

  constructor() { }
  post(tema: Tema) {
    let temas: Tema[] = [];
    if (this.get() != null) {
      temas = this.get();
    }
    temas.push(tema);
    localStorage.setItem('temitas', JSON.stringify(temas));
  }
  get(): Tema[] {
    return JSON.parse(localStorage.getItem('temitas') || '[]');
  }
  clear() {
    localStorage.removeItem('temitas');
  }
}
