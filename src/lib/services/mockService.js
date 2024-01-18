import {v4} from 'uuid';
import exampleTasks from '../../exampleTasks.json';

/*

    This is a mockup service to emulate server in github pages

 */

class Service {
    constructor() {
        this.tasks = [...exampleTasks];
    }

    getTasks() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({data: this.tasks});
            }, 1500);
        });
    }

    postTask(task) {
        const createdTask = {
            task,
            id: v4(),
        };

        this.tasks.push(createdTask);
        return new Promise((resolve) => {
            resolve({data: {createdTask}});
        });
    }

    deleteTask(id) {
        return new Promise((resolve) => {
            this.tasks = this.tasks.filter((obj) => obj.id !== id);
            resolve({
                data: {
                    tasks: this.tasks,
                    status: 'ok',
                },
            });
        });
    }
}

export default Service;
