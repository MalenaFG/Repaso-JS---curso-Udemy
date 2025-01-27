//métodos que se pueden usar para encontrar elementos en un array:

//.includes -> devuelve boolean y solamente te indica si tienes un elemento en tu array
//.some -> devuelve boolean si al menos un elemento de tu array cumple una condición
const numbers = [1, 3, 4, 5, 7, 9]

const evenNumbers = numbers.some(e => e % 2 === 0)

console.log(evenNumbers) //retorna true en este caso

//.find -> Devuelve el primer elemento que cumple una condición

const findEvenNumber = numbers.find(e => e % 2 === 0)

console.log(findEvenNumber) //retorna 4 en este caso

// . every -> Retorna booleano si TODOS cumplen la condición

const onlyEvenNumbers = numbers.every(e => e % 2 === 0)

console.log(onlyEvenNumbers) //retorna false en este caso

// .reduce -> retorna un acumulado del total. consta de un callback y un número del que parte el acumulador, en este caso 0
const total = numbers.reduce((acumulador, numero) => acumulador + numero, 0)

console.log(total)