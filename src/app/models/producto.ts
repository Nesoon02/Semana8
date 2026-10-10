// Modelo del frontend: replica la forma del JSON que devuelve la API Spring Boot
// (GET /api/productos del Laboratorio 05A).
// Tipo literal: solo se permiten estos dos valores
export type EstadoStock = 'OK' | 'INSUFICIENTE';
export interface Producto {
id?: number;
nombre: string;
precio: number;
stock: number;
estadoStock?: string;
}