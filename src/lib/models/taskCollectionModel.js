import AbstractModel from '../Abstracts/model';
import TaskModel from './taskModel';
import TaskView from '../views/taskView';

class TaskCollectionModel extends AbstractModel {
    constructor() {
        super();

        this.properties.tasks = [
            /* TaskModel.fromString('task', 'go do this'),
            TaskModel.fromString('task', 'go do that'), */
        ];
    }

    newTask(task) {
        const taskModel = TaskModel.fromString('task', task);
        const taskView = new TaskView(taskModel);
        taskView.render();
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        this.fireEvent('removedTask', this.tasks);
    }

    addTask(task) {
        console.log('entered');
        this.properties.tasks.push(task);
        this.fireEvent('newTask');
        /* this.properties.tasks.push(task);
        task.addObserver('removed', this.removeTask.bind(this, task.get('id')));
        this.fireEvent('added', this.tasks); */
    }

    addTaskFromString(name) {
        const task = TaskModel.fromString(name);
        this.addTask(task);
    }
}

/* class MainModel extends AbstractModel {
    constructor() {
        super();

        this.tasks = ['go do this', 'go do that', 'king in the castle', 'uauauiua'];
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        this.fireEvent('change', this.tasks);
    }

    addTask(task) {
        this.tasks.push(task);
        this.fireEvent('change', this.tasks);
    }
} */

export default TaskCollectionModel; /* MainModel */
