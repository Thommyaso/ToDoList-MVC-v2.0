import AbstractController from '../Abstracts/controller';
import TaskModel from '../models/taskModel';
import Service from '../services/service';

class taskController extends AbstractController {
    constructor(model) {
        super(model);
        this.service = new Service();
    }

    createTask(task) {
        return this.service.postTask(task)
            .then((result) => {
                const receivedTask = result.data.createdTask;
                const taskModel = TaskModel.fromJSON(receivedTask);

                this.model.addTask(taskModel);

            })
            .catch(() => {
                const error = new Error('can not create task');

                return Promise.reject(error);
            });
    }

    getTasks() {
        return this.service.getTasks()
            .then((result) => {
                const allTasks = result.data;
                allTasks.forEach((task) => {
                    const taskModel = TaskModel.fromJSON(task);

                    this.model.addTask(taskModel);
                });
                this.model.fireEvent('updated');

            })
            .catch(() => {
                const error = new Error('can not get task list');
                return Promise.reject(error);
            });
    }

    removeTaskById(id) {
        return this.service.deleteTask(id)
            .then(() => {
                this.model.deleteTaskById(id);
            })
            .catch(() => {
                const error = new Error('can not remove task');

                return Promise.reject(error);
            });
    }
}

export default taskController;
