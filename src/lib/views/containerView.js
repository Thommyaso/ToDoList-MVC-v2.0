import AbstractView from '../Abstracts/view';
import FormView from '../views/formView';
import TaskCollectionView from '../views/taskCollectionView';
import TaskController from '../controllers/taskController';

class ContainerView extends AbstractView {
    constructor(model) {
        super(model);
    }

    async render() {
        const taskController = new TaskController(this.model);
        const taskCollectionView = new TaskCollectionView(this.model);
        const formView = new FormView(this.model);

        taskCollectionView.controller = taskController;
        taskCollectionView.rootEl = this.rootEl.querySelector('.container__list');
        taskCollectionView.render();

        formView.controller = taskController;
        formView.rootEl = this.rootEl.querySelector('.container__form');
        formView.init();
        formView.render();
        await taskController.getTasks();
    }
}

export default ContainerView;

