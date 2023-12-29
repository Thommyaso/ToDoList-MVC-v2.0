import AbstractController from '../Abstracts/controller';

class TaskCollectionController extends AbstractController {
    constructor(model) {
        super(model);
    }

    addedTask(task) {
        this.model.properties.tasks.push(task);
        // console.log(this.model);
        this.model.fireEvent('newTask');
        // return 'fuuck';
        // console.log(task);
        // console.log(this.model);
    }

    getTasks() {
        return this.model.properties.tasks;
    }
}


export default TaskCollectionController;
