import AbstractController from '../Abstracts/controller';
import TaskModel from '../models/taskModel';

class TaskCollectionController extends AbstractController {
    constructor(model) {
        super(model);
    }

    addedTask(task) {
        const taskModel = TaskModel.fromString('task', task);
        this.model.properties.tasks.push(taskModel);
        this.model.fireEvent('newTask');
    }

    getTasks() {
        return this.model.properties.tasks;
    }
}


export default TaskCollectionController;
