const { v4 } = require('uuid')

class Task {
    id = ''
    description = ''
    complete = null

    constructor(description) {
        this.id = v4()
        this.description = description
        this.complete = null
    }
}

module.exports = Task
