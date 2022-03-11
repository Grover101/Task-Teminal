require('colors')

const { guardarDB, leerDB } = require('./helpers/guardarArchivo')
const { inquirerMenu, pause, leerInput } = require('./helpers/inquirer')
const Tareas = require('./models/tareas')

console.clear()

const main = async () => {
    let opt = ''
    const tareas = new Tareas()

    const tareasDB = leerDB()

    console.table(tareasDB)
    await pause()

    do {
        opt = await inquirerMenu()

        switch (opt) {
            case '1':
                // crear tarea
                const desc = await leerInput('Descripcion:')
                tareas.createTarea(desc)
                // console.log(`Creando tarea: ${desc}`)
                break

            case '2':
                console.table(tareas.listadoArr)
                break
        }

        guardarDB(tareas.listadoArr)

        await pause()
    } while (opt !== '0')
}

main()
