const fs = require('fs')
const file = './db/data.json'

const saveDB = data => {
    fs.writeFileSync(file, JSON.stringify(data, null, 2))
}

const readDB = () => {
    if (fs.existsSync(file)) {
        return JSON.parse(fs.readFileSync(file, 'utf-8'))
    }
    return null
}

module.exports = { saveDB, readDB }
