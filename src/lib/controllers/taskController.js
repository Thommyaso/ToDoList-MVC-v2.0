import AbstractController from '../Abstracts/controller';
import TaskModel from '../models/taskModel';
import Service from '../services/service';

class taskController extends AbstractController {
    constructor(model) {
        super(model);
        this.service = new Service();
    }

    async createTask(task) {
        try {
            const data = await this.service.postTask(task);
            const receivedTask = data.data.createdTask;
            const taskModel = TaskModel.fromJSON(receivedTask);

            this.model.addTask(taskModel);

        } catch (error) {
            console.error(error);
        }
    }

    async getTasks() {
        try {
            const data = await this.service.getTasks();
            const allTasks = data.data;
            allTasks.forEach((task) => {
                const taskModel = TaskModel.fromJSON(task);

                this.model.addTask(taskModel);
            });
            this.model.fireEvent('updated');

        } catch (error) {
            console.error(error);
        }
    }

    async removeTaskById(id) {
        try {
            const data = await this.service.deleteTask(id);
            const receivedList = data.data.tasks;
            this.model.set('tasks', []);
            receivedList.forEach((task) => {
                const taskModel = TaskModel.fromJSON(task);

                this.model.addTask(taskModel);
            });
            this.model.fireEvent('updated');

        } catch (error) {
            console.error(error);
        }
    }
}

export default taskController;
