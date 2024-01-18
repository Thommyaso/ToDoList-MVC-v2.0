import AbstractModel from '../Abstracts/model';

class TaskModel extends AbstractModel {
    constructor() {
        super();
    }

    static fromJSON(data) {
        const {id, task} = data;
        const result = new TaskModel();
        result.set('id', id);
        result.set('task', task);
        return result;
    }

    static validate(task) {
        if (task.length > 0) {
            return true;
        }
        return false;
    }
}

export default TaskModel;
