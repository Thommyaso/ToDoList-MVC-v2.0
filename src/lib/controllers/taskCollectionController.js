import AbstractController from '../Abstracts/controller';
import TaskModel from '../models/taskModel';
// import {v4 as uuidv4} from 'uuid';
import Service from '../services/service';

class TaskCollectionController extends AbstractController {
    constructor(model) {
        super(model);
        this._service = null;
    }

    get service() {
        return this._service;
    }

    set service(baseUrl) {
        this._service = new Service(baseUrl);
    }

    async createTask(task) {

        const receivedTask = await this.service.postUser('task', task);
        const taskModel = TaskModel.fromJSON(receivedTask);

        this.model.addTask(taskModel);
    }

    removeTask(id) {
        console.log(id, 'hereeee');

    }
}


export default TaskCollectionController;
