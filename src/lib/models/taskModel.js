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
}

export default TaskModel;
