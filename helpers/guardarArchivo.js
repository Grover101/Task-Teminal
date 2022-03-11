const fs = require('fs')
const archivo = './db/data.json'

const guardarDB = data => {
    fs.writeFileSync(archivo, JSON.stringify(data, null, 2))
}

const leerDB = () => {
    if (fs.existsSync(archivo)) {
        return JSON.parse(fs.readFileSync(archivo, 'utf-8'))
    }
    return null
}

module.exports = { guardarDB, leerDB }
