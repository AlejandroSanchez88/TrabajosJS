console.log("Inicio de Programa")
// Entrada a la pagina
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
}

// const persona1 = new Persona(prompt("Nombre"), prompt("Apellido"))

// console.log(alert("Hola, " + persona1.nombre + " " + persona1.apellido + "\n" + "Que vas a llevar?"))

// console.log(alert(prompt()))

// Actividad

class postre {
    constructor(id, nombre, tipoDePostre, precio, porciones, frio, img) {
        this.id = id
        this.img = img
        this.nombre = nombre
        this.tipoDePostre = tipoDePostre
        this.precio = precio
        this.porciones = porciones
        this.frio = frio
    }
}

const postres = []

postres.push (new postre(id = 1, 'Torta Oreo', 'Torta', 2200, 12, true, "../img/tortaOreo.jpeg"))
postres.push (new postre(id = 2, 'Postre Milka', 'Postre Individual', 650, 1, true, "../img/postres.jpeg"))
postres.push (new postre(id = 3, 'Muffins Varios', 'Postre Individual', 250, 1, false, "../img/muffinsVarios.jpeg"))
postres.push (new postre(id = 4, 'Caja de bombones', 'Bombon', 500, 4, false, "../img/bombones.jpeg"))
postres.push (new postre(id = 5, 'Budin Oreo', 'Budin', 750, 8, false, "../img/budinOreo.jpeg"))
postres.push (new postre(id = 6, 'Desayuno Pow Patrol', 'Desayuno', 2000, 2, true, "../img/desayunoInfantil_PowPatrol.jpeg"))
postres.push (new postre(id = 7, 'Masitas dulces', 'Masas', 100, 1, false, "../img/galletitasVarias.jpeg"))

// console.log(postres);

const carrito =  []

let total = 0

function renderizarProductos() {
    let tienda = document.getElementById('tienda')
    // console.log(tienda);

    let filtro = document.getElementById('filtro')

    filtro.innerHTML = `
    <button class="btn btn-warning mb-5" onClick="filtroPrecio()">Filtrar mayor a 1000</button>
    `

    postres.forEach((e) => {
        let productoHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${e.img}" class="card-img-top" alt="img">
                <div class="card-body">
                    <h5 class="card-title">${e.nombre}</h5>
                    <p class="card-text">Ingredientes....${e.precio}</p>
                    <button class="btn btn-primary" onClick="agregarAlCarrito(${e.id})">Agregar al Carrito</button>
                </div>
            </div>
            `
            tienda.innerHTML += productoHTML

    });

}

renderizarProductos()

function agregarAlCarrito(id) {
    let producto = postres.find(e => e.id == id)

    // console.log(producto);

    let productoEnCarrito = carrito.find(producto => producto.id == id)

    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }else {
        producto.cantidad = 1
        carrito.push(producto)
        // console.log(carrito);

    }
    
    renderizarCarrito()
}

function renderizarCarrito() {
    let carritoHTML = document.getElementById('carrito')

    // console.log(carrito);
    html = ''

    carrito.forEach((e, id) =>{
        html += `
            <div class="card" style="width: 18rem;">
                <img src="${e.img}" class="card-img-top" alt="img">
                <div class="card-body">
                    <h5 class="card-title">${e.nombre}</h5>
                    <p class="card-text">Ingredientes....${e.precio}</p>
                    <p>Cantidad: ${e.cantidad}</p>
                    <button class="btn btn-danger" onClick="eliminarDelCarrito(${id})">Eliminar</button>
                </div>
            </div>
        `
    })

    carritoHTML.innerHTML = html

    calcularTotal()
}

function calcularTotal() {
    carrito.forEach(e => {
        total += e.cantidad * e.precio
    })

    console.log(total);
}

const eliminarDelCarrito = (id)=> {

    // console.log(carrito[id].cantidad); //1
    carrito[id].cantidad--;
    // console.log(carrito[id].cantidad); 

    if(carrito[id].cantidad == 0){
        
        carrito.splice(id, 1);
    }
    
    renderizarCarrito();
}

function filtroPrecio() {
    let bd = postres.filter(e => e.precio > 1000)
    console.log(bd);
}



// renderizarCarrito()
// agregarAlCarrito()

console.log("Fin de Programa");