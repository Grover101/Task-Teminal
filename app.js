require('colors')

const { mostrarMenu, pause } = require('./helpers/mensajes');

console.clear()

const main = async () => {
    console.log('Hello Word');
    mostrarMenu()
    pause()
}

main()