import { ObjectId } from "mongodb";

export type Semana = "lunes" | "martes" | "miércoles" | "jueves" | "viernes" | "sábado" | "domingo";
export interface Horario {
  aula: string;
  horaInicio: number;
  horaFin: number;
  dia: Semana;
}

export interface MetaMaestro {
  _id: string;
  nombre: string;
}

export interface Asignacion {
  nrc?: string;
  maestro?: Maestro;
  horarios: Horario[];
}

export interface Materia {
  readonly _id: string;
  readonly nombre: string;
  readonly asignaciones: Asignacion[];
}

export interface Dispositivos {
  _id: ObjectId;
  nombre: string;
  cantidad: number;
}

export interface Maestro {
  _id: ObjectId;
  nombre: string;
}

interface TimeLog {
  inicioOriginal: string;
  inicio: string;
  fin?: string;
}

// Información necesaria del usuario para la interfaz prestamos
export interface MetaUsuario {
  _id: ObjectId;
  nickname: string;
}

export interface Prestamo {
  _id?: string;
  observaciones?: string;
  status: "entrante" | "activo" | "deuda" | "inactivo";
  maestro: MetaMaestro;
  materia: {
    _id: string;
    nombre: string;
    nrc: string;
    horario: Horario;
  };
  dispositivos: {
    _id: string;
    nombre: string;
    localPrestado: number;
  }[];
  usuario: MetaUsuario;
  timelog: TimeLog;
}

export interface Usuario {
  _id: ObjectId;
  nickname: string;
  pass: string;
  rol: "common" | "admin";
}
