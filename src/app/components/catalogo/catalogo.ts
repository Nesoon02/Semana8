import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto';
@Component({
selector: 'app-catalogo',
standalone: true,
imports: [RouterLink],
templateUrl: './catalogo.html',
styleUrl: './catalogo.scss'
})
export class Catalogo implements OnInit {
productos = signal<Producto[]>([]);
cargando = signal(false);
error = signal('');
constructor(private productoService: ProductoService) {}
ngOnInit(): void {
this.cargarProductos();
}
cargarProductos(): void {
this.cargando.set(true);
this.error.set('');
this.productoService.listar().subscribe({
next: datos => {
this.productos.set(datos);
this.cargando.set(false);
},
error: err => {
this.error.set(`Error HTTP: ${err.status}`);
this.cargando.set(false);
}
});
}
eliminar(id: number | undefined): void {
if (!id) return;
if (!confirm('¿Desea eliminar este producto?')) return;
this.productoService.eliminar(id).subscribe({
next: () => this.cargarProductos(),
error: err => this.error.set(`Error HTTP: ${err.status}`)
});
}
}