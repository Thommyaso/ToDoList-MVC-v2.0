import AbstractView from '../Abstracts/view';
import TaskView from './taskView';

class TaskCollectionView extends AbstractView {
    constructor(model) {
        super(model);
    }

    render() {
        this._rootEl.innerHTML = '';
        const taskModels = this.model.properties.tasks;
        taskModels.forEach((model, index) => {
            model.properties.index = index;
            const taskView = new TaskView(model, this);
            const createdTask = taskView.render();
            this._rootEl.appendChild(createdTask);
            // console.log(createdTask.index);
        });
    }

    handleAddedTask(task) {
        this.controller.addedTask(task);
        return task;
    }

    handleDeleteClick(index) {
        this.controller.deleteListElement(index);
        console.log(index, 'from main controller');
    }

    update() {
        this.render();
    }
}

export default TaskCollectionView;
