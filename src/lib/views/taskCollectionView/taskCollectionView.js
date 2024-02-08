import AbstractView from '../../Abstracts/view';
import TaskView from '../taskView/taskView';
import './taskCollectionView.scss';

class TaskCollectionView extends AbstractView {
    constructor(model) {
        super(model);
        this.model.addObserver('updated', this.render.bind(this));
    }

    _renderItem(task) {
        const taskView = new TaskView(task);
        taskView.render();
        this.rootEl.appendChild(taskView.rootEl);
        taskView.rootEl.addEventListener('onTaskDelete', this._onTaskDeleteHandle.bind(this));
    }

    _onTaskDeleteHandle(event) {
        this.rootEl.dispatchEvent(new CustomEvent('onTaskDelete', event));
    }

    render() {
        this.rootEl.innerHTML = '';
        this.model.get('tasks')
            .forEach(this._renderItem.bind(this));
    }
}

export default TaskCollectionView;
