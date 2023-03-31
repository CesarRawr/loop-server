import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

import {Semana} from '../models/types';
// Obtener nombre del dia
export const getDayName = (): Semana => {
  const days: Semana[] = [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado"
  ];

  return days[new Date().getDay()];
};
