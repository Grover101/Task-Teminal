const Task = require('./task')

class Tasks {
    constructor() {
        this._list = {}
    }

    get listArray() {
        const list = []
        Object.keys(this._list).forEach(key => {
            list.push(this._list[key])
        })
        return list
    }

    loadTasksDB(task = []) {
        task.forEach(task => {
            this._list[task.id] = task
        })
    }

    createTask(description = '') {
        const task = new Task(description)
        this._list[task.id] = task
        return task
    }

    listAllTasks() {
        console.log()
        this.listArray.forEach((task, index) => {
            const id = `${index + 1}`.green
            const { description, complete } = task
            const state = complete ? 'Complete'.green : 'Pending'.red
            console.log(`${id}. ${description} :: ${state}`)
        })
    }

    listCompletedPending(completed = true) {
        let i = 1
        console.log()
        this.listArray.forEach(task => {
            const { description, complete } = task
            const state = complete ? 'Complete'.green : 'Pending'.red
            if (completed) {
                if (complete)
                    console.log(
                        `${(i++ + '.').green} ${description} :: ${
                            complete.green
                        }`
                    )
            } else {
                if (!complete)
                    console.log(
                        `${(i++ + '.').green} ${description} :: ${state}`
                    )
            }
        })
    }

    markTasksComplete(ids = []) {
        ids.forEach(id => {
            const task = this._list[id]
            const date = new Date()
            if (!task.complete)
                task.complete = `${date.getDate()}/${
                    date.getMonth() + 1
                }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
        })

        this.listArray.forEach(task => {
            if (!ids.includes(task.id)) this._list[task.id].complete = null
        })
    }

    deleteTask(id = '') {
        if (this._list[id]) delete this._list[id]
    }
}

module.exports = Tasks
