const inquirer = require('inquirer')
require('colors')

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            '1. Crear Tarea',
            '2. Listar Tareas',
            '3. Listar Tareas Completadas',
            '4. Listar Tareas Pendientes',
            '5. Completar Tarea(s)',
            '6. Borrar Tarea',
            '7. Salir'
        ]
    }
]

const inquirerMenu = async () => {
    console.clear()
    console.log('=========================='.green)
    console.log('  Seleccione una opcion'.green)
    console.log('==========================\n'.green)

    const opt = await inquirer.prompt(preguntas)
    return opt
}

module.exports = {
    inquirerMenu
}
