import AbstractController from '../Abstracts/controller';
import TaskModel from '../models/taskModel';
import TaskView from '../views/taskView';
import {v4 as uuidv4} from 'uuid';

class TaskCollectionController extends AbstractController {
    constructor(model) {
        super(model);
    }

    addedTask(task) {
        const id = uuidv4();
        const taskModel = TaskModel.setModelWithTask('task', task);
        const taskView = new TaskView(taskModel, this);

        taskModel.set('id', id);
        taskView.render();

        const taskObject = {
            id,
            taskModel,
            taskView,
        };

        this.model.properties.tasks.push(taskObject);
        this.model.fireEvent('updated');
    }

    deleteListElement(id) {
        this.model.properties.tasks = this.model.properties.tasks.filter((obj) => obj.id !== id);
        this.model.fireEvent('updated');
    }
}


export default TaskCollectionController;
