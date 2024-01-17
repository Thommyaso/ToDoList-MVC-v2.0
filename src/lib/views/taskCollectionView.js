import AbstractView from '../Abstracts/view';
import TaskView from '../views/taskView';

class TaskCollectionView extends AbstractView {
    constructor(model) {
        super(model);
        this.model.addObserver('updated', this.render.bind(this));
    }

    showLoader() {
        this.rootEl.innerHTML = 'loading';
    }

    showError() {
        this.rootEl.innerHTML = 'there was a problem during downloading task list';
    }

    render() {
        this.rootEl.innerHTML = '';
        const tasks = this.model.get('tasks');

        tasks.forEach((task) => {
            const taskView = new TaskView(task, this.controller);
            taskView.render();
            taskView.rootEl.addEventListener('onButtonClicked', () => {
                const customEvent = new Event('onLiElBtnClicked');
                this.rootEl.dispatchEvent(customEvent);
            });
            this.rootEl.appendChild(taskView.rootEl);
        });
    }
}

export default TaskCollectionView;
