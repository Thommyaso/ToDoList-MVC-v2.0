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

    /* async readTasks() {
        this.model.set('tasks', []);
        const aaa = await this.service.getUser('task');
        console.log(aaa);
        aaa.data.forEach((element) => {
            const taskModel = TaskModel.fromJSON(element);

            this.model.addTask(taskModel);
        });
    } */

    async createTask(task) {
        const receivedTask = await this.service.postUser('task', task);
        const taskModel = TaskModel.fromJSON(receivedTask);

        this.model.addTask(taskModel);
    }

    async removeTask(id) {
        const receivedList = await this.service.deleteUser(id);
        this.model.set('tasks', []);
        receivedList.data.tasks.forEach((task) => {
            const taskModel = TaskModel.fromJSON(task);

            this.model.addTask(taskModel);
        });
        this.model.fireEvent('updated');
    }
}


export default TaskCollectionController;
