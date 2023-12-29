import AbstractView from '../Abstracts/view';
// import TaskView from './taskView';

class TaskCollectionView extends AbstractView {
    constructor(model) {
        super(model);
    }

    render() {

        const tasks = this.model.properties.tasks; // this.controller.getTasks();
        tasks.forEach((task) => {
            // const taskView = new TaskView(task);
            console.log(task);

            this._rootEl.appendChild(task /* taskView.createElement */);
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
