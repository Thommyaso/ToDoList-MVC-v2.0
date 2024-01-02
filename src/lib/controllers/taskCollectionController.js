import AbstractController from '../Abstracts/controller';
import TaskModel from '../models/taskModel';
import {v4 as uuidv4} from 'uuid';

class TaskCollectionController extends AbstractController {
    constructor(model) {
        super(model);
    }

    addedTask(task) {
        const id = uuidv4();
        const taskModel = TaskModel.setModelWithTask('task', task);

        taskModel.set('id', id);
        const tasks = this.model.get('tasks');
        tasks.push(taskModel);
        this.model.fireEvent('updated');
    }

    deleteListElement(id) {
        let tasks = this.model.get('tasks');
        tasks = tasks.filter((obj) => obj.properties.id !== id);

        this.model.removeKey('tasks');
        this.model.set('tasks', tasks);
        this.model.fireEvent('updated');
    }
}


export default TaskCollectionController;
