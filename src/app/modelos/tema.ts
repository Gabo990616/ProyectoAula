import { Respuesta } from './respuesta';
import { Usuario } from './usuario';

export class Tema {
  titulo!: string;
  contenido!: string;
  fechapub!: string;
  usuario!: Usuario;
  respuestas!: Respuesta[];
  identificador!:number;
}
