import AbstractController from '../Abstracts/controller';
import TaskModel from '../models/taskModel';
import Service from '../services/service';

class taskController extends AbstractController {
    constructor(model) {
        super(model);
        this.service = new Service();
    }

    async createTask(task) {
        let result = {};
        try {
            result = await this.service.postTask(task);
        } catch (error) {
            console.error(error);
            return;
        }
        const receivedTask = result.data.createdTask;
        const taskModel = TaskModel.fromJSON(receivedTask);

        this.model.addTask(taskModel);
    }

    async getTasks() {
        let data = [];
        try {
            data = await this.service.getTasks();
        } catch (error) {
            console.error(error);
            console.log('dupsko');
            return;
        }
        const allTasks = data.data;
        allTasks.forEach((task) => {
            const taskModel = TaskModel.fromJSON(task);

            this.model.addTask(taskModel);
        });
        this.model.fireEvent('updated');
    }

    removeTaskById(id) {
        // Version 1:
        // return new Promise((resolve, reject) => {
        //     this.service.deleteTask(id)
        //         .then(() => {
        //             this.model.deleteTaskById(id);
        //             resolve();
        //         })
        //         .catch((error) => {
        //             console.error(error);
        //             reject();
        //         });
        // });
        // Version 2:
        return this.service.deleteTask(id)
            .then(() => {
                this.model.deleteTaskById(id);
            });
    }
}

export default taskController;
