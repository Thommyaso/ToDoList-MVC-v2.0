import AbstractController from '../Abstracts/controller';

class TaskCollectionController extends AbstractController {
    constructor(model) {
        super(model);
    }

    getTasks() {
        return this.model.properties.tasks;
    }
}


export default TaskCollectionController;
