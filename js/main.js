//Objeto

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
        this.disponible = true;
    }


    sumarImpuesto() {
        //Agregar condicion para precios
        return this.precio =  this.precio * 1.21
    }
}

//Array de Productos
let arrayProductos = [];
do {
    var comprobacion = prompt("ingrese el nombre del Producto o Cerrar, para terminar de agregar productos");
    // if (comprobacion === "cerrar" || comprobacion === "CERRAR" || comprobacion === "Cerrar") {
    if (comprobacion.toLowerCase() === "cerrar") {
        break;
    } else {
        nombrePr = comprobacion;
        let precioPr = prompt("Ingrese el Precio del Producto");
        let cantidadPr = parseInt(prompt("Ingrese la cantidad de Stock"));
        arrayProductos.push(new Producto(nombrePr, precioPr, cantidadPr));
    }
}

//while (comprobacion != "cerrar" || comprobacion != "CERRAR" || comprobacion != "Cerrar");
while (comprobacion.toLowerCase() != "cerrar");

console.log(arrayProductos);

for (var producto of arrayProductos) {
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3>Cantidad: " + producto.cantidad + "</h3></li>");
    document.write("<li><h3>Precio: " + producto.precio + "</h3></li>");
    document.write("<li><h3>Precio con Interes: " + producto.sumarImpuesto() + "</h3></li></ul><br>");

    console.log(producto.Nombre);
    console.log(producto.precio);
    console.log(producto.cantidad);
    console.log(producto.sumarImpuesto());
}

//Poco Stock - Menos de 20 Productos

var pocoStock = arrayProductos.filter(producto => producto.cantidad <= 20);
console.log('Productos con poco stock, reponer productos');
console.log(pocoStock);
document.write("<h3> Lista de productos con poco Stock (menos de 3 unidades)")

for (var producto of pocoStock) {
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3>Precio: " + producto.precio + "</h3></li>");
    document.write("<li><h3>Cantidad: " + producto.cantidad + "</h3></li></ul><br>");
}

//Producto sin stock

var sinStock = arrayProductos.filter(producto => producto.cantidad == '0' || producto.disponible == false);
console.log(sinStock);
document.write("<h3> Lista de productos sin Stock ")

for (var producto of sinStock) {
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3>Precio: " + producto.precio + "</h3></li>");
    document.write("<li><h3>Cantidad: " + producto.cantidad + "</h3></li></ul><br>");
}

//Poco Stock <20
let pocoStoccK = arrayProductos.filter(producto => producto.cantidad <= 20);
document.write("<h3> Lista de producto con poco stock (<20): </h3>");
for (let producto of pocoStock){
    let contenedor = document.createElement("div");
    //agregamos el innerHTML
    contenedor.innerHTML =  `<h3> Nombre: ${producto.nombre}</h3>
                            <p> Cantidad: ${producto.cantidad}</p>
                            <p> Precio: ${producto.precio}</p>` ;
    document.body.appendChild(contenedor);
}


