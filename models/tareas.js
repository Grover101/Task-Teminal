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

    listadoCompleto() {
        this.listadoArr.forEach((tarea, index) => {
            const id = `${index + 1}`.green
            const { desc, completadoEn } = tarea
            const estado = completadoEn ? 'Completada'.green : 'Pendiente'.red
            console.log(`${id}. ${desc} :: ${estado}`)
        })
    }
}

module.exports = Tareas
