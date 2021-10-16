class Carrito {
    constructor(){
        this.productos = JSON.parse(localStorage.getItem("productos")) || [];
        this.total = 0;
    }

    guardarCambios(){
        localStorage.setItem("productos", JSON.stringify(this.productos));
    }

    itemCarritoFila (id, nombre, precio, cantidad) {
        return `
        <tr>
        <th scope="row">${nombre}</th>
        <td>$${precio}</td>
        <td>${cantidad}</td>
        <td>$${precio*cantidad}</td>
        <td><button class="btn btn-danger px-2 py-0" onClick="miCarrito.removeItem('${id}')">X</button></td>
        </tr>`;
    }

    cargarTabla(){

        let total = document.querySelector('.total-compra');
        this.total = 0
        
        //limpiar tabla
        $("#bodyTabla").html(""); 
        console.log(this.productos)
        if (this.productos.length == 0) {
            $("#bodyTabla").append('<div><h5 class="text-center">No tiene ningun producto en el carrito </h5></div>');
            total.innerHTML = 'TOTAL: $0';
    
        }
        else {
            for (const productoSeleccionado of this.productos) {
                $("#bodyTabla").append(this.itemCarritoFila(productoSeleccionado.id, productoSeleccionado.nombre, productoSeleccionado.precio, productoSeleccionado.cantidad));
                this.total += productoSeleccionado.precio * productoSeleccionado.cantidad;
            }
            console.log(this.total)
            total.innerHTML = 'TOTAL $' + this.total.toString() ;
        }
    }

    removeItem(id){
        let i = this.productos.map(p => p.id).indexOf(id)
        if (i != -1){
            //Eliminar item del carrito
            this.productos.splice(i, 1);
            this.guardarCambios()
            this.cargarTabla()
        }
    }
}

const miCarrito = new Carrito();
miCarrito.cargarTabla()