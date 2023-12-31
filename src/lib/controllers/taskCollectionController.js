import AbstractController from '../Abstracts/controller';
import TaskModel from '../models/taskModel';
import TaskView from '../views/taskView';

class TaskCollectionController extends AbstractController {
    constructor(model) {
        super(model);
    }

    addedTask(task) {
        const taskModel = TaskModel.fromString('task', task);
        const index = this.model.properties.tasks.length;
        taskModel.properties.index = index;
        const taskView = new TaskView(taskModel, this);
        this.model.properties.tasks.push(taskModel);
        this.model.properties.views.push(taskView);
        this.model.fireEvent('updateView');
    }

    getTasks() {
        return this.model.properties.tasks;
    }

    deleteListElement(index) {
        delete this.model.properties.tasks[index];
        delete this.model.properties.views[index];
        this.model.fireEvent('updateView');
    }
}


export default TaskCollectionController;
