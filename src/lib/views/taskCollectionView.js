import AbstractView from '../Abstracts/view';

class TaskCollectionView extends AbstractView {
    constructor(model) {
        super(model);
    }

    update() {
        this.rootEl.innerHTML = '';
        const taskViews = this.model.properties.views;
        taskViews.forEach((view) => {
            this._rootEl.appendChild(view.rootEl);
        });
    }
}

export default TaskCollectionView;
