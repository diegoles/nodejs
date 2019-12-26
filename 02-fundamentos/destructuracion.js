let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getName: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

console.log(deadpool.getName());

//Destructuracion

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);