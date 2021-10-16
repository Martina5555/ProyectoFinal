//S I M U L A D O R   D E   B U S Q U E D A

//clase con constructor
class Producto {
  constructor(tipo, nombre, precio) {
    this.tipo = tipo
    this.nombre = nombre
    this.precio = precio
  }
  //metodos
  mostrarProducto() {
    let mensaje = ''

    mensaje += '| Nombre: ' + this.nombre
    if (this.tipo) {
      mensaje += '| Tipo: ' + this.tipo
    }
    mensaje += '| Precio : ' + this.precio

    console.log(mensaje)
  }

  productoComoTexto() {
    let mensaje = ''

    mensaje += '| Nombre: ' + this.nombre
    if (this.tipo) {
      mensaje += '| Tipo: ' + this.tipo
    }
    mensaje += '| Precio : ' + this.precio

    return mensaje;
  }

}
//estas funciones son metodos tambien?
function buscarPorNombre(nombreABuscar, arrayDondeBuscar) {
  const resultado = arrayDondeBuscar.filter(elementoAComparar => elementoAComparar.nombre == nombreABuscar);
  return resultado;
}

function buscarPorPrecio(precioABuscar, arrayDondeBuscar) {
  const resultado = arrayDondeBuscar.filter(elementoAComparar => elementoAComparar.precio == precioABuscar);
  return resultado;
}

// 4 objetos diferentes nuevos
const ARosas = new Producto(null, 'Agua de rosas', 120);
const Shampoo1 = new Producto('Pelo Equilibrado', 'Shampoo', 420);
const Shampoo2 = new Producto('Pelo Graso', 'Shampoo', 420);
const Shampoo3 = new Producto('Pelo Seco', 'Shampoo', 420);

//1 array
const misProductos = [ARosas, Shampoo1, Shampoo2, Shampoo3]
//console.log(misProductos);


//variables p guardar el resultado de los metodos e ingreso de info
const nombreDelUsuario = prompt('Ingrese el nombre del producto a buscar: ')

const resultado = buscarPorNombre(nombreDelUsuario, misProductos)
//const resultado2 = buscarPorPrecio(420, misProductos)


var mensaje = ''

if (resultado.length == 0) {
  mensaje = 'No se encontraron resultados'


} else {
  resultado.map(elem => {
    mensaje += elem.productoComoTexto();
    mensaje += '\n'

  })
}

alert(mensaje);
