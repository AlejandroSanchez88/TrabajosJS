console.log('Inicio de acividades');

class postre {
    constructor(nombre, tipoDePostre, precio, porciones, frio) {
        this.nombre = nombre
        this.tipoDePostre = tipoDePostre
        this.precio = precio
        this.porciones = porciones
        this.frio = frio
    }
}

const postres = []

postres.push (new postre('Torta Oreo', 'Torta', 2200, 12, true))
postres.push (new postre('Postre Milka', 'Postre Individual', 650, 1, true))
postres.push (new postre('Muffins Varios', 'Postre Individual', 250, 1, false))
postres.push (new postre('Caja de bombones', 'Bombon', 500, 4, false))
postres.push (new postre('Budin Oreo', 'Budin', 750, 8, false))
postres.push (new postre('Desayuno Pow Patrol', 'Desayuno', 2000, 2, true))
postres.push (new postre('Masitas dulces', 'Masas', 100, 1, false))

console.log(postres);

console.log('Fin de acividades');