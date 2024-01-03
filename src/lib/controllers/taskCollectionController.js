import AbstractController from '../Abstracts/controller';
import TaskModel from '../models/taskModel';
import {v4 as uuidv4} from 'uuid';

class TaskCollectionController extends AbstractController {
    constructor(model) {
        super(model);
    }

    createTask(task) {
        const taskModel = TaskModel.fromJSON({
            id: uuidv4(),
            task,
        });

        this.model.addTask(taskModel);
    }
}


export default TaskCollectionController;
