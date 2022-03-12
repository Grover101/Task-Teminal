const inquirer = require('inquirer')
require('colors')

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear Tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar Tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar Tareas Completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar Tareas Pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar Tarea(s)`
            },
            {
                value: '6',

                name: `${'6.'.green} Borrar Tarea`
            },
            {
                value: '0',
                name: `${'7.'.green} Salir`
            }
        ]
    }
]

const inquirerMenu = async () => {
    console.clear()
    console.log('=========================='.green)
    console.log('  Seleccione una opcion'.white)
    console.log('==========================\n'.green)

    const { opcion } = await inquirer.prompt(preguntas)
    return opcion
}

const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ]
    console.log('\n')
    await inquirer.prompt(question)
}

const leerInput = async message => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) return 'Por favor ingrese un valor'
                return true
            }
        }
    ]

    const { desc } = await inquirer.prompt(question)
    return desc
}

const listadoTareasBorrar = async (tareas = []) => {
    const choices = tareas.map((tarea, index) => {
        const i = `${index + 1}.`.green
        return {
            value: tarea.id,
            name: `${i} ${tarea.desc}`
        }
    })

    choices.unshift({
        value: '0',
        name: `${'0.'.green} Cancelar`
    })

    const question = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(question)
    return id
}

const confirmar = async message => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(question)
    return ok
}
module.exports = {
    inquirerMenu,
    pause,
    leerInput,
    listadoTareasBorrar,
    confirmar
}
