import AbstractView from '../Abstracts/view';

class TaskCollectionView extends AbstractView {
    constructor(model) {
        super(model);
    }

    render() {
        this.rootEl.innerHTML = '';
        const tasks = this.model.properties.tasks;
        tasks.forEach((task) => {
            this.rootEl.appendChild(task.taskView.rootEl);
        });
    }
}

export default TaskCollectionView;
