let nombre = 'Deadpool';
let real = 'wade Winston';

console.log(`${nombre} ${real}`);

function getNombre() {
    return `${nombre} es ${real}`;
}

console.log(`El nombre de ${ getNombre() }.`);