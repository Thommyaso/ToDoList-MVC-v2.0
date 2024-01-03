import AbstractModel from '../Abstracts/model';
import TaskModel from '../models/taskModel';

class TaskCollectionModel extends AbstractModel {
    constructor() {
        super();

        this.properties = {
            tasks: [],
        };
    }

    addTask(task) {
        task.addObserver('removed', this.deleteTaskById.bind(this, task.get('id')));
        this.get('tasks').push(task);
        this.fireEvent('updated');
    }

    deleteTaskById(id) {
        const tasks = this.get('tasks');

        // this.model.removeKey('tasks');
        this.set('tasks', tasks.filter((obj) => obj.properties.id !== id));
        this.fireEvent('updated');
    }

    static fromJSON(data) {
        const taskCollectionModel = new TaskCollectionModel();
        data.forEach((element) => {
            const taskModel = TaskModel.fromJSON(element);
            taskCollectionModel.addTask(taskModel);
        });
        return taskCollectionModel;
    }

}

export default TaskCollectionModel;
