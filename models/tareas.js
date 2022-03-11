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

    cargarTareasFromArray(tarea = []) {
        tarea.forEach(tarea => {
            this._listado[tarea.id] = tarea
        })
    }

    createTarea(desc = '') {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
        return tarea
    }
}

module.exports = Tareas
