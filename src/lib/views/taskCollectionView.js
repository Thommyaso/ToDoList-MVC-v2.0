import AbstractView from '../Abstracts/view';

class TaskCollectionView extends AbstractView {
    constructor(model) {
        super(model);
    }

    render() {
        this._rootEl.innerHTML = '';
        const taskViews = this.model.properties.views;
        taskViews.forEach((view) => {
            this._rootEl.appendChild(view.rootEl);
        });
    }

    update() {
        this.render();
    }
}

export default TaskCollectionView;
