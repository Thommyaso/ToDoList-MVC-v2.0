import AbstractController from '../Abstracts/controller';
import TaskModel from '../models/taskModel';
import Service from '../services/service';

class taskController extends AbstractController {
    constructor(model) {
        super(model);
        this.service = new Service();
    }

    _handleError(error) {
        return Promise.reject(error);
    }

    createTask(task) {
        if (!TaskModel.validate(task)) {
            return Promise.reject('invalid task');
        }
        return this.service.postTask(task)
            .then((result) => {
                const receivedTask = result.data.createdTask;
                const taskModel = TaskModel.fromJSON(receivedTask);

                this.model.addTask(taskModel);

            })
            .catch(this._handleError.bind(this));
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
            .catch(this._handleError.bind(this));
    }

    removeTaskById(id) {
        return this.service.deleteTask(id)
            .then(this.model.deleteTaskById.bind(this.model, id))
            .catch(this._handleError.bind(this));
    }
}

export default taskController;
