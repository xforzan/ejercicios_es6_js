// 2.1
 const pointsList = [32, 54, 21, 64, 75, 43]

 const copia = [...pointsList]

 console.log(copia)

// 2.2

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copia2 = {...toy}

console.log(copia2)

// 2.3


const pointsLis2 = [54,87,99,65,32];

const newArray = [...pointsList, ...pointsLis2]

console.log(newArray)

// 2.4

const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const fusion = {...toy, toyUpdate}
console.log(fusion)

// 2.5

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const Array = [...colors.filter((color)=> color !== 'amarillo')]

console.log(Array)

