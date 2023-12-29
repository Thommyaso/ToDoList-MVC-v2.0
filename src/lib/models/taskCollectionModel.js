import AbstractModel from '../Abstracts/model';
import TaskModel from './taskModel';
import TaskView from '../views/taskView';

class TaskCollectionModel extends AbstractModel {
    constructor() {
        super();

        this.properties.tasks = [];
    }

    newTask(task) {
        const taskModel = TaskModel.fromString('task', task);
        const taskView = new TaskView(taskModel);
        taskView.render();
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        this.fireEvent('removedTask', this.tasks);
    }
}

export default TaskCollectionModel;
