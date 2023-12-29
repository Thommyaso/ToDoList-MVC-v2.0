import AbstractView from '../Abstracts/view';
import TaskView from './taskView';

class TaskCollectionView extends AbstractView {
    constructor(model) {
        super(model);
    }

    render() {
        this._rootEl.innerHTML = '';
        const taskModels = this.model.properties.tasks;
        taskModels.forEach((model) => {
            const taskView = new TaskView(model);
            const createdTask = taskView.render();
            this._rootEl.appendChild(createdTask);
        });
    }

    handleAddedTask(task) {
        this.controller.addedTask(task);
        return task;
    }

    update() {
        this.render();
    }
}

export default TaskCollectionView;
