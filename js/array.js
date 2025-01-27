const tecnologyes = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']

// su indice empieza en el 0. pueden tener distintos tipos de datos pero se recomienda no hacer esto, que todos los datos sean del mismo tipo

console.table(tecnologyes)

//Remplazar elementos
tecnologyes[4] = 'Nest.js'

//AGREGAR ELEMENTOS
//tecnologyes[5] = 'Node.js'
//tecnologyes.push('Node.js') este método muta el array
const newArray = [...tecnologyes, 'Node.js'] //No muta el arreglo, genera una copia
console.table(newArray)

//ELIMINAR ELEMENTOS
//tecnologyes.shift() afecta al primer elemento y MUTA EL ARREGLO
const tecnologyes2 = tecnologyes.filter(tech => {
    return tech !== 'HTML' && tech
})
//.filter no muta el arreglo, lo está asignando a uno nuevo
console.log(tecnologyes2)

//VARIAR CONDICIONES
const tecnologyes3 = tecnologyes.map(tech => {
    return tech === 'Nest.js' ? 'Node.js'
        : tech
})
//.map no muta el arreglo
console.log(tecnologyes3)
