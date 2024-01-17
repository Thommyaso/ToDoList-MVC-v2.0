import AbstractView from '../Abstracts/view';
import TaskView from '../views/taskView';

class TaskCollectionView extends AbstractView {
    constructor(model) {
        super(model);
        this.model.addObserver('updated', this.render.bind(this));
    }

    render() {
        this.rootEl.innerHTML = '';
        const tasks = this.model.get('tasks');

        tasks.forEach((task) => {
            const taskView = new TaskView(task, this.controller);
            taskView.render();
            taskView.rootEl.addEventListener('onButtonClicked', (data) => {
                console.log(data);
                const customEvent = new CustomEvent('onLiElBtnClicked', data);
                this.rootEl.dispatchEvent(customEvent);
            });
            this.rootEl.appendChild(taskView.rootEl);
        });
    }
}

export default TaskCollectionView;
