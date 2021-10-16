//S I M U L A D O R   D E   B U S Q U E D A


class Producto{
  constructor(tipo, nombre, precio) {
    this.tipo = tipo
    this.nombre = nombre
    this.precio = precio
  }
  
  mostrarProducto(){
    let mensaje = ''
    
    mensaje += '| Nombre: ' + this.nombre
    if(this.tipo){
      mensaje += '| Tipo: ' + this.tipo   
    }
    mensaje += '| Precio : ' + this.precio
    
    console.log(mensaje)
  }

  productoComoTexto(){
    let mensaje = ''
    
    mensaje += '| Nombre: ' + this.nombre
    if(this.tipo){
      mensaje += '| Tipo: ' + this.tipo   
    }
    mensaje += '| Precio : ' + this.precio
    
    return mensaje;
  }
  
}

function buscarPorNombre (nombreABuscar, arrayDondeBuscar) {
    const resultado = arrayDondeBuscar.filter( elementoAComparar => elementoAComparar.nombre == nombreABuscar);
    return resultado;
}

function buscarPorPrecio (precioABuscar, arrayDondeBuscar) {
    const resultado = arrayDondeBuscar.filter( elementoAComparar => elementoAComparar.precio == precioABuscar);
    return resultado;
}

const ARosas = new Producto(null, 'Agua de rosas', 120);
const Shampoo1  = new Producto('Pelo Equilibrado', 'Shampoo', 420);
const Shampoo2  = new Producto('Pelo Graso', 'Shampoo', 420);
const Shampoo3  = new Producto('Pelo Seco', 'Shampoo', 420);

const misProductos = [ARosas, Shampoo1, Shampoo2, Shampoo3]
//console.log(misProductos);

const nombreDelUsuario = prompt('Ingrese el nombre del producto a buscar: ')

const resultado = buscarPorNombre(nombreDelUsuario, misProductos)
//const resultado2 = buscarPorPrecio(420, misProductos)


var mensaje = ''

if(resultado.length == 0){
    mensaje = 'No se encontraron resultados'


} else {
    resultado.map( elem => {    
        mensaje += elem.productoComoTexto();
        mensaje += '\n'

    })
}

alert(mensaje);

/* Querría tener en el proyecto final de mi e-commerce:
-la funcion de filtro en la pestaña de productos por precio, tipo de producto, etc
-la busqueda en el header
-la funcionalidad del carrito en donde se puedan agregar y quitar productos, seleccionar el tipo 
deseado y sumar costos de envio o descontar cupones de descuento*/





