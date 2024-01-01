import AbstractModel from '../Abstracts/model';

class TaskModel extends AbstractModel {
    constructor() {
        super();
    }

    static fromString(key, value) {
        const task = new TaskModel();
        task.set(key, value);
        return task;
    }
}

export default TaskModel;
