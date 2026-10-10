import { Producto } from '../models/producto';
// Datos simulados con la misma estructura que el JSON de la API.
// En la semana 8 este arreglo se reemplazará por una petición HTTP real.
// Regla del backend: estadoStock = 'INSUFICIENTE' cuando stock < 5.
export const PRODUCTOS_MOCK: Producto[] = [
{ id: 1, nombre: 'Monitor 24 pulgadas', precio: 699.9, stock: 3,
estadoStock: 'INSUFICIENTE' },
{ id: 2, nombre: 'Teclado mecánico', precio: 249.5, stock: 12,
estadoStock: 'OK' },
{ id: 3, nombre: 'Mouse inalámbrico', precio: 89.9, stock: 25,
estadoStock: 'OK' },
{ id: 4, nombre: 'Laptop 14 pulgadas', precio: 3299.0, stock: 2,
estadoStock: 'INSUFICIENTE' },
{ id: 5, nombre: 'Disco SSD 1 TB', precio: 389.0, stock: 8,
estadoStock: 'OK' },
{ id: 6, nombre: 'Cámara web Full HD', precio: 179.9, stock: 4,
estadoStock: 'INSUFICIENTE' },
];