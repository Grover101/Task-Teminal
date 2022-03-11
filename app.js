require('colors')

const { inquirerMenu, pause, leerInput } = require('./helpers/inquirer')
const Tareas = require('./models/tareas')

console.clear()

const main = async () => {
    let opt = ''
    const tareas = new Tareas()
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
                console.table(tareas._listado)
                break
        }

        await pause()
    } while (opt !== '0')
}

main()
