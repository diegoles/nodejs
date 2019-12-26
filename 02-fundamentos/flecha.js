// function sumar(a, b) {
//     return a + b;
// }

let sumar = (a, b) => a + b;

console.log(sumar(10, 20));


// function saludar() {
//     return 'Hola mundo!!!';
// }

let saludar = () => 'Hola mundo!!!';

console.log(saludar());

let saludar1 = (nombre) => `Hola ${nombre}!!!`;

console.log(saludar1('Edgar'));


let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getName() { return `${this.nombre} ${this.apellido} - poder: ${this.poder}`; }

}

console.log(deadpool.getName());