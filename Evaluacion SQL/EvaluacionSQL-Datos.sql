#agrego cargos 
insert into minimarket.cargos (cargo) values ('Cajero/a');
insert into minimarket.cargos (cargo) values ('Jefe/a de cajas');
insert into minimarket.cargos (cargo) values ('Gerente/a Comercial');
insert into minimarket.cargos (cargo) values ('Bodeguero/a');

#agrego tipos de productos
insert into minimarket.categoriasProductos (categoria) values ('Bebestibles');
insert into minimarket.categoriasProductos (categoria) values ('Lacteos');
insert into minimarket.categoriasProductos (categoria) values ('Articulos de aseo');
insert into minimarket.categoriasProductos (categoria) values ('Higiene personal');
insert into minimarket.categoriasProductos (categoria) values ('Alimentos congelados');
insert into minimarket.categoriasProductos (categoria) values ('Alimentos frescos');
insert into minimarket.categoriasProductos (categoria) values ('Articulos de oficina');
insert into minimarket.categoriasProductos (categoria) values ('Pastas');

#agrego clientes
insert into minimarket.clientes (nombre, rut, telefono, correo) values ('Marco Reus', '22.546.213-7','+56998752468','m.reus@fifa.com');
insert into minimarket.clientes (nombre, rut, telefono, correo) values ('Jude Bellingham', '19.687.927-1','+56934685760','j.bellingham@fifa.com');
insert into minimarket.clientes (nombre, rut, telefono, correo) values ('Emre Can', '18.296.988-k','+56926475891','e.can@fifa.com');
insert into minimarket.clientes (nombre, rut, telefono, correo) values ('Niklas Sule', '17.647.128-8','+56946578216','n.sule@fifa.com');

#agrego empleados
insert into minimarket.empleados (nombre, rut, telefono, correo, cargo_id) values ('Juan Carlos Bodoque', '19.639.257-4','+56975315942','jcb@31m.com', 2);
insert into minimarket.empleados (nombre, rut, telefono, correo, cargo_id) values ('Tulio Triviño', '15.655.343-2','+56932145622','tt@31m.com', 3);
insert into minimarket.empleados (nombre, rut, telefono, correo, cargo_id) values ('Patana', '21.936.752-1','+56998745697','p@31m.com', 1);
insert into minimarket.empleados (nombre, rut, telefono, correo, cargo_id) values ('Juanin Juan Harry', '20.996.185-7','+56935462897','jjh@31m.com', 4);

#agrego proveedores
insert into minimarket.proveedores (nombre, telefono, correo, empresa) values ('Carlo Ponzi', '+56912345678','ca_po@carozzi.com','Carozzi');
insert into minimarket.proveedores (nombre, telefono, correo, empresa) values ('Victor Lustig', '+56952876493','vi_lu@klaren.com','Klaren');
insert into minimarket.proveedores (nombre, telefono, correo, empresa) values ('Rafael Garay', '+56916794356','ra_ga@ccu.com','CCU');
insert into minimarket.proveedores (nombre, telefono, correo, empresa) values ('Vaca Lola', '+5665489724','va_lo@colun.com','Colun');

#agrego productos
insert into minimarket.productos (nombre, precioCompra, precioVenta, stock, categoria_id, proveedor_id) values ('Canutones 400g', 500, 1000, 57, 8, 1);
insert into minimarket.productos (nombre, precioCompra, precioVenta, stock, categoria_id, proveedor_id) values ('Corbatas 400g', 500, 1000, 53, 8, 1);
insert into minimarket.productos (nombre, precioCompra, precioVenta, stock, categoria_id, proveedor_id) values ('Spaguetti 400g', 500, 1000, 81, 8, 1);
insert into minimarket.productos (nombre, precioCompra, precioVenta, stock, categoria_id, proveedor_id) values ('Detergente 750ml', 1090, 2180, 96, 3, 2);
insert into minimarket.productos (nombre, precioCompra, precioVenta, stock, categoria_id, proveedor_id) values ('Lavaloza 750ml', 600, 1200, 114, 3, 2);
insert into minimarket.productos (nombre, precioCompra, precioVenta, stock, categoria_id, proveedor_id) values ('Pepsi 500ml', 495, 990, 36, 1, 3);
insert into minimarket.productos (nombre, precioCompra, precioVenta, stock, categoria_id, proveedor_id) values ('Watt`s naranja 1.5L', 600, 1200, 28, 1, 3);
insert into minimarket.productos (nombre, precioCompra, precioVenta, stock, categoria_id, proveedor_id) values ('Leche entera 1L', 485, 980, 14, 2, 4);
insert into minimarket.productos (nombre, precioCompra, precioVenta, stock, categoria_id, proveedor_id) values ('Leche Semidescremada 1L', 495, 990, 23, 2, 4);

#agrego datos comprobante de venta
insert into minimarket.comprobanteVenta (tipoComprobante, fecha, empleado_id, cliente_id) values ('boleta', '2022-10-18', 1, 1);
insert into minimarket.comprobanteVenta (tipoComprobante, fecha, empleado_id, cliente_id) values ('boleta', '2022-10-19', 1, 2);
insert into minimarket.comprobanteVenta (tipoComprobante, fecha, empleado_id, cliente_id) values ('boleta', '2022-11-22', 1, 3);
insert into minimarket.comprobanteVenta (tipoComprobante, fecha, empleado_id, cliente_id) values ('boleta', '2022-12-25', 1, 4);

#agrego datos al detalle de venta
insert into minimarket.detalleVenta (cantidad, producto_id, comprobanteVenta_id) values ('3','2','1');
insert into minimarket.detalleVenta (cantidad, producto_id, comprobanteVenta_id) values ('5','3','1');
insert into minimarket.detalleVenta (cantidad, producto_id, comprobanteVenta_id) values ('6','1','2');
insert into minimarket.detalleVenta (cantidad, producto_id, comprobanteVenta_id) values ('6','2','2');
insert into minimarket.detalleVenta (cantidad, producto_id, comprobanteVenta_id) values ('6','3','2');
insert into minimarket.detalleVenta (cantidad, producto_id, comprobanteVenta_id) values ('1','6','3');
insert into minimarket.detalleVenta (cantidad, producto_id, comprobanteVenta_id) values ('3','7','4');
insert into minimarket.detalleVenta (cantidad, producto_id, comprobanteVenta_id) values ('2','4','4');
insert into minimarket.detalleVenta (cantidad, producto_id, comprobanteVenta_id) values ('2','5','4');
insert into minimarket.detalleVenta (cantidad, producto_id, comprobanteVenta_id) values ('4','1','4');
insert into minimarket.detalleVenta (cantidad, producto_id, comprobanteVenta_id) values ('4','2','4');

#agrego datos al comprobante de compra
insert into minimarket.comprobanteCompra (tipoComprobante, fecha, empleado_id) values ('factura', '2022-10-01', 2);

#agrego datos al detalle de la compra
insert into minimarket.detalleCompra (cantidad, producto_id, comprobanteCompra_id) values (100,1,1);
insert into minimarket.detalleCompra (cantidad, producto_id, comprobanteCompra_id) values (100,2,1);

#ganancias
select inversion as 'compras 2022', ingresos as 'ventas 2022', (ingresos - inversion) as ganancias from (
	select sum(dc.cantidad * p.precioCompra) as inversion
    from minimarket.detallecompra as dc
    join minimarket.productos as p
    on p.producto_id = dc.producto_id 
    join minimarket.comprobantecompra as cc
    on cc.comprobanteCompra_id = dc.comprobanteCompra_id
    where cc.fecha between '2022-01-01' and '2022-12-31') as compras, (
	select sum(dv.cantidad * p.precioVenta) as ingresos
    from minimarket.detalleventa as dv
    join minimarket.productos as p
    on p.producto_id = dv.producto_id 
    join minimarket.comprobanteventa as cv
    on cv.comprobanteVenta_id = dv.comprobanteVenta_id
    where cv.fecha between '2022-01-01' and '2022-12-31') as ventas;