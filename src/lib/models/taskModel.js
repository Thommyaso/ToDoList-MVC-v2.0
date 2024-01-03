import AbstractModel from '../Abstracts/model';

class TaskModel extends AbstractModel {
    constructor() {
        super();
    }

    // static setModelWithTask(key, value) {
    //     const task = new TaskModel();
    //     task.set(key, value);
    //     return task;
    // }

    static fromJSON(data) {
        const {id, task} = data;
        const result = new TaskModel();
        result.set('id', id);
        result.set('task', task);
        return result;
    }
}

export default TaskModel;
