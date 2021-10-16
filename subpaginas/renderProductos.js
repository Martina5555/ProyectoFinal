//Clase para el control de los productos.
class ProductosId {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imgRoute = imagen;
  }
  productoShow() {
    return `
            <a href="./pagEnConstruccion.html">
                <img class="imgProductos item-foto" src="../imagenes/${this.imgRoute}" alt="Aceite de ricino"></a>
            <h5 class="tituloH5 item-nombre">${this.nombre}</h5>

            <div class="item-detalle">
                <p class="item-precio">$${this.precio}</p>
                <button class="item-boton btn btn-primary agregarAlCarrito" id="${this.id}">AÑADIR AL
                    CARRITO</button>
            </div>
        `;
  }
}

//Creación de objetos de productos - Instanciación de la clase
const aceiteRicino = new ProductosId(
  "aceiteRicino",
  "Aceite de Ricino",
  290,
  "aceiteDeRicino.jpg"
);
const jabonCoco = new ProductosId(
  "jabonCoco",
  "Jabón humectante y neutro",
  260,
  "jabonCoco.jpg"
);
const jabonAntiacne = new ProductosId(
  "jabonAntiacne",
  "Jabón antiacné y reductor de poros",
  240,
  "jabonGrasa.jpg"
);
const shampooPeloEquilibrado = new ProductosId(
  "shampooPeloEquilibrado",
  "Shampoo Pelo Equilibrado",
  420,
  "shampooEq.jpeg"
);
const shampooPeloGraso = new ProductosId(
  "shampooPeloGraso",
  "Shampoo Pelo Graso",
  420,
  "shampooG.jpg"
);
const shampooPeloSeco = new ProductosId(
  "shampooPeloSeco",
  "Shampoo Pelo seco",
  420,
  "shampooS.jpg"
);
const balsamo = new ProductosId(
  "balsamo",
  "Bálsamo Labial",
  210,
  "balsamo.jpg"
);
const aguaDeRosas = new ProductosId(
  "aguaDeRosas",
  "Agua de Rosas",
  290,
  "aguaDeRosas.jpg"
);
const aguaMicelar = new ProductosId(
  "aguaMicelar",
  "Agua Micelar de Rosas",
  500,
  "aguaMic.jpg"
);
const mascarillaCapilar = new ProductosId(
  "mascarillaCapilar",
  "Mascarilla Capilar Humectante",
  310,
  "mascarilla.jpeg"
);
const pad = new ProductosId(
  "pad",
  "Pad Desmaquillante Ecológico",
  210,
  "pads.jpeg"
);
const desodorante = new ProductosId(
  "desodorante",
  "Desodorante Natural",
  330,
  "desodorante.jpeg"
);
const cremaCorporal = new ProductosId(
  "cremaCorporal",
  "Crema Hidratante Corporal",
  610,
  "cremaCorporal.jpeg"
);
const cremaManos = new ProductosId(
  "cremaManos",
  "Crema Hidratante para Manos",
  460,
  "cremaManos.jpeg"
);
const acondicionador = new ProductosId(
  "acondicionador",
  "Acondicionador Sólido Natural",
  320,
  "Acondicionador.jpeg"
);

//ARRAY DE PRODUCTOS CON ID

const arrayProductosId = [
  aceiteRicino,
  jabonCoco,
  jabonAntiacne,
  shampooPeloEquilibrado,
  shampooPeloGraso,
  shampooPeloSeco,
  balsamo,
  aguaDeRosas,
  aguaMicelar,
  mascarillaCapilar,
  pad,
  desodorante,
  cremaCorporal,
  cremaManos,
  acondicionador,
];

//Función para mostrar los productos en la página de productos
function renderProductos() {

  for (let i = 1; i < arrayProductosId.length; i++) {
    let texto = `<div class="prod${i.toString()} prod">${arrayProductosId[i].productoShow()}</div>`
    $("#section-productos").append(texto);
  }
  $('.prod').hide()
  $('.prod').fadeIn(1000)
}

function notificarAgregado(texto){
  let notifContainer = document.querySelector('.notif-section')
  
  const elemento =`<div class="notification"><p>${texto}</p></div>`;
  $(".notif-section").append(elemento)
  $(".notif-section:last-child").hide()
  $(".notif-section:last-child").fadeIn()
  setTimeout(() => {notifContainer.innerHTML = notifContainer.innerHTML.replace(elemento, "")}, 5000)

}

//Función que agrega los event listeners necesarios para el funcionamiento del carrito.
function funcionamientoCarritos() {
  let botonAgregarAlCarrito = document.getElementsByClassName("agregarAlCarrito");
  for (var i = 0; i < botonAgregarAlCarrito.length; i++) {
    
    //Agregar event listeners a los botones de agregar al carrito
    botonAgregarAlCarrito[i].addEventListener("click", (event) => {
 
      const productoEncontrado = arrayProductosId.find( producto => producto.id == event.target.id);
      var carrito = JSON.parse(localStorage.getItem("productos")) || [];
      
      //buscar elemento en el carrito
      const index = carrito.map(item => item.id).indexOf(productoEncontrado.id)
      if(index == -1){
        //el elemento no se encontraba en el carrito
        carrito.push({ ...productoEncontrado, cantidad:1 });
        notificarAgregado(`Se agregó 1 ${productoEncontrado.nombre} a tu carrito`)
      }else{
        //el elemento estaba en el carrito, se agrega 1 a su cantidad
        carrito[index].cantidad += 1
        notificarAgregado(`La cantidad de ${carrito[index].nombre} en tu carrito es de ${carrito[index].cantidad}`)
      }
      
      localStorage.setItem("productos", JSON.stringify(carrito));
    });
  }
}

function iniciar(){
    renderProductos();
    funcionamientoCarritos();
}

window.onload = iniciar;
