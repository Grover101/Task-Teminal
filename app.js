require('colors')

const { saveDB, readDB } = require('./helpers/saveFile')
const {
    listMenu,
    pause,
    readInput,
    confirm,
    listTasksDelete,
    showListSelectCompleted
} = require('./helpers/inquirer')
const Tasks = require('./models/tasks')

console.clear()

const main = async () => {
    let opt = ''
    const tasks = new Tasks()

    const tasksDB = readDB()
    if (tasksDB) tasks.loadTasksDB(tasksDB)

    do {
        opt = await listMenu()

        switch (opt) {
            case '1':
                const desc = await readInput('Description:')
                tasks.createTask(desc)
                break
            case '2':
                tasks.listAllTasks()
                break
            case '3':
                tasks.listCompletedPending()
                break
            case '4':
                tasks.listCompletedPending(false)
                break
            case '5':
                const ids = await showListSelectCompleted(tasks.listArray)
                tasks.markTasksComplete(ids)
                break
            case '6':
                const id = await listTasksDelete(tasks.listArray)
                if (id !== '0') {
                    const ok = await confirm('Are you sure to delete?')
                    if (ok) tasks.deleteTask(id)
                }
                break
        }

        saveDB(tasks.listArray)

        await pause()
    } while (opt !== '0')
}

main()
