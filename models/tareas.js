const Tarea = require('./tarea')

class Tareas {
    _listado = {}
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
