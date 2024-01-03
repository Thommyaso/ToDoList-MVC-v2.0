import AbstractView from '../Abstracts/view';
import FormView from '../views/formView';
import TaskCollectionView from '../views/taskCollectionView';
import TaskCollectionController from '../controllers/taskCollectionController';

class ContainerView extends AbstractView {
    constructor(model) {
        super(model);
    }

    render() {
        const taskCollectionController = new TaskCollectionController(this.model);
        const taskCollectionView = new TaskCollectionView(this.model);
        const formView = new FormView(this.model);

        taskCollectionController.service = 'http://localhost:3000/';

        taskCollectionView.controller = taskCollectionController;
        taskCollectionView.rootEl = this.rootEl.querySelector('.container__list');
        taskCollectionView.render();

        formView.controller = taskCollectionController;
        formView.rootEl = this.rootEl.querySelector('.container__form');
        formView.init();
        formView.render();
    }
}

export default ContainerView;

