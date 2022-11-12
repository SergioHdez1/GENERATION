create schema if not exists `minimarket`;
#CREAR TABLAS SIN FK PRIMERO
#tabla de tipos de productos
create table `minimarket`.`categoriasProductos`(
`categoria_id` int not null auto_increment,
`categoria` varchar(30) not null,
primary key (`categoria_id`));

#tabla de proveedores
create table `minimarket`.`proveedores`(
`proveedor_id` int not null auto_increment,
`nombre` varchar(30) not null,
`telefono` varchar(12) not null,
`correo` varchar(30) not null,
`empresa` varchar(30) not null,
primary key (`proveedor_id`));

#tabla de clientes
create table `minimarket`.`clientes`(
`cliente_id` int not null auto_increment,
`nombre` varchar(30) not null,
`rut` varchar(15) not null,
`telefono` varchar(12) not null,
`correo` varchar(30) not null,
primary key (`cliente_id`));

#tabla de cargos de los empleados
create table `minimarket`.`cargos`(
`cargo_id` int not null auto_increment,
`cargo` varchar(30) not null,
primary key (`cargo_id`));

#CREAR TABLAS CON FK
#Tabla de empleados
create table `minimarket`.`empleados`(
`empleado_id` int not null auto_increment,
`nombre` varchar(30) not null,
`rut` varchar(15) not null,
`telefono` varchar(12) not null,
`correo` varchar(30) not null,
primary key (`empleado_id`));
alter table minimarket.empleados add cargo_id int not null;
alter table minimarket.empleados add constraint cargoEmpleado foreign key (cargo_id) references minimarket.cargos(cargo_id);

#tabla de  productos 
create table `minimarket`.`productos`(
`producto_id` int not null auto_increment,
`nombre` varchar(30) not null,
`precioCompra` int not null,
`precioVenta` int not null,
`stock` int not null,
primary key (`producto_id`));
#agrego la fk de categoria
alter table minimarket.productos add categoria_id int not null;
alter table minimarket.productos add constraint categoriaProducto foreign key (categoria_id) references minimarket.categoriasProductos(categoria_id);
#agrego la fk de proveedor
alter table minimarket.productos add proveedor_id int not null;
alter table minimarket.productos add constraint proveedorProducto foreign key (proveedor_id) references minimarket.proveedores(proveedor_id);

#tabla del comprobante de la venta
create table `minimarket`.`comprobanteVenta`(
`comprobanteVenta_id` int not null auto_increment,
`tipoComprobante` varchar(30) not null,
`fecha` date not null,
primary key (`comprobanteVenta_id`));
#agrego la fk de empleado
alter table minimarket.comprobanteVenta add empleado_id int not null;
alter table minimarket.comprobanteVenta add constraint ventaEmpleado foreign key (empleado_id) references minimarket.empleados(empleado_id);
#agrego la fk de cliente
alter table minimarket.comprobanteVenta add cliente_id int not null;
alter table minimarket.comprobanteVenta add constraint  comprobanteCliente foreign key (cliente_id) references minimarket.clientes(cliente_id);

#tabla del detalle de la venta
create table `minimarket`.`detalleVenta`(
`detalleVenta_id` int not null auto_increment,
`cantidad` int not null,
primary key (`detalleVenta_id` ));
#agrego la fk de producto
alter table minimarket.detalleVenta add producto_id int not null;
alter table minimarket.detalleVenta add constraint detalleVentaProducto foreign key (producto_id) references minimarket.productos(producto_id);
#agrego la fk de comprobante de la venta
alter table minimarket.detalleVenta add comprobanteVenta_id int not null;
alter table minimarket.detalleVenta add constraint detalleComprobanteVenta foreign key (comprobanteVenta_id) references minimarket.comprobanteVenta(comprobanteVenta_id);


#tabla de comprobantes de las compras
create table `minimarket`.`comprobanteCompra`(
`comprobanteCompra_id` int not null auto_increment,
`tipoComprobante` varchar(30) not null,
`fecha` date not null,
primary key (`comprobanteCompra_id`));
#agrego la fk de empleado
alter table minimarket.comprobanteCompra add empleado_id int not null;
alter table minimarket.comprobanteCompra add constraint compraEmpleado foreign key (empleado_id) references minimarket.empleados(empleado_id);

#tabla del detalle de la compra
create table `minimarket`.`detalleCompra`(
`detalleCompra_id` int not null auto_increment,
`cantidad` int not null,
primary key (`detalleCompra_id` ));
#agrego la fk de producto
alter table minimarket.detalleCompra add producto_id int not null;
alter table minimarket.detalleCompra add constraint detalleCompraProducto foreign key (producto_id) references minimarket.productos(producto_id);
#agrego la fk de comprobante de la venta
alter table minimarket.detalleCompra add comprobanteCompra_id int not null;
alter table minimarket.detalleCompra add constraint detalleComprobanteCompra foreign key (comprobanteCompra_id) references minimarket.comprobanteCompra(comprobanteCompra_id);
