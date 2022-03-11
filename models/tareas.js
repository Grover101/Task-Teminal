const Tarea = require('./tarea')

class Tareas {
    _listado = {}

    get listadoArr() {
        const listado = []
        Object.keys(this._listado).forEach(key => {
            listado.push(this._listado[key])
        })
        return listado
    }

    constructor() {
        this._listado = {}
    }

    createTarea(desc = '') {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
        return tarea
    }
}

module.exports = Tareas
