require('colors')

const { guardarDB, leerDB } = require('./helpers/guardarArchivo')
const {
    inquirerMenu,
    pause,
    leerInput,
    listadoTareasBorrar,
    confirmar
} = require('./helpers/inquirer')
const Tareas = require('./models/tareas')

console.clear()

const main = async () => {
    let opt = ''
    const tareas = new Tareas()

    const tareasDB = leerDB()
    if (tareasDB) tareas.cargarTareasFromArray(tareasDB)

    do {
        opt = await inquirerMenu()

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion:')
                tareas.createTarea(desc)
                break
            case '2':
                tareas.listadoCompleto()
                break
            case '3':
                tareas.listarPendientesCompletadas()
                break
            case '4':
                tareas.listarPendientesCompletadas(false)
                break
            case '5':
                //
                break
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr)
                if (id !== '0') {
                    const ok = await confirmar(
                        'Esta seguro de borrar la tarea?'
                    )
                    if (ok) tareas.borrarTarea(id)
                }
                break
        }

        guardarDB(tareas.listadoArr)

        await pause()
    } while (opt !== '0')
}

main()
