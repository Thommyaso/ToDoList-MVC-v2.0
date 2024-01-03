import AbstractController from '../Abstracts/controller';
import TaskModel from '../models/taskModel';
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
