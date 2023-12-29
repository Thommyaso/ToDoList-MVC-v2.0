import AbstractView from '../Abstracts/view';
import TaskView from './taskView';

class TaskCollectionView extends AbstractView {
    constructor(model) {
        super(model);
    }

    render() {
        const tasks = this.controller.getTasks();
        tasks.forEach((task) => {
            const taskView = new TaskView(task);
            console.log(taskView.render());
            this._rootEl.appendChild(taskView.render());

        });
    }
}

export default TaskCollectionView;
