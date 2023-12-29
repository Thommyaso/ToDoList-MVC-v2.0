import AbstractController from '../Abstracts/controller';

class TaskController extends AbstractController {
    constructor(model) {
        super(model);

    }

    handleNewTask(task) {
        this.model.properties.task = task;
        this.model.fireEvent('addTask', this.model.properties.task);
    }
}

export default TaskController;
