// Un objeto es una colección de propiedades. Una propiedad tiene una clave y un valor

const product = {
    productName: 'computer',
    price: 300,
    available: true
}

console.log(product)

// Object.freeze(product) !!!! no permite que se altere el objeto
// Object.seal(product) !!! permite alterar las propiedades existentes pero no borrarlas ni añadir nuevas

//destructurar

const { productName, available } = product
console.log(productName)

// Object Literal Enhacement : La key y su valor tienen el mismo nombre, por lo tanto no hace falta escribir ambos, solo con poner el nombre de la variable es suficiente.
const userName = 'Pepita'
const userAge = 13

const newUser = { userName, userAge }

console.log(newUser)

// Modificar valores de un objeto

product.available = false //cambia el valor

product.hasDiscount = true //agrega un valor

delete product.price //elimina una propiedad

console.table(product)

// Cambiar claves en la destructuración para evitar errores si tenemos más de un objeto y se repiten los nombres de sus propiedades

const fruta = {
    nombre: 'pera',
    color: 'verde',
    peso: 0.50,
    origen: {
        pais: 'España'
    }
}

const verdura = {
    nombre: 'pimiento',
    color: 'rojo',
    peso: 0.37
}

const { nombre: nombreFruta, color: colorFruta, peso: pesoFruta, origen: { pais: procedencia } } = fruta //destructuración y cambio de nombre de un objeto anidado
const { nombre: nombreVerdura, color: colorVerdura, peso: pesoVerdura } = verdura
console.log(`la fruta se llama ${nombreFruta} y procede de ${procedencia}, la verdura se llama ${nombreVerdura} y no sé de donde viene`)

// SPREAD OPERATOR
const carrito = {
    cantidad: 1,
    ...product, // de esta manera el objeto producto no quedaría anidado, se incluirían sus propiedades directamente
    //product: product si lo escribiera así me generaría un objeto anidado
    //product también podría hacerlo así, de esta forma, como esta clave y el nombre del objeto que queremos incluir es el mismo, no hace falta indicarla dos veces.
}

console.log(carrito)

// OBJECT ASSING: le paso los objetos creados anteriormente que quiero unir en un nuevo objeto
const newObject = Object.assign(product, newUser)
console.log(newObject)