import { Deuda } from "./Deuda";

export interface Cliente  {
  codigo: number;
  dni: string;
  nombre: string;
  deudas: Deuda[];
}

