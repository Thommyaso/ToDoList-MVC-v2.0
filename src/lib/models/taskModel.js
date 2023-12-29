import AbstractModel from '../Abstracts/model';

class TaskModel extends AbstractModel {
    constructor() {
        super();
        // this.properties.name = '';
        // this.properties.id = null;
    }

    setName(name) {
        this.properties.name = name;
    }

    remove() {
        this.fireEvent('removed');
    }

    static fromString(/* name, id */key, value) {
        const task = new TaskModel();
        task.set(key, value);
        // task.set('name',name);
        // task.set('id', id);
        return task;
    }
}

export default TaskModel;
