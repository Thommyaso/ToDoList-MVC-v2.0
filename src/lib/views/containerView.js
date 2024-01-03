import AbstractView from '../Abstracts/view';

// import FormController from './formController';
// import FormModel from '../models/formModel';
import FormView from '../views/formView';

// import TaskCollectionModel from '../models/taskCollectionModel';
import TaskCollectionView from '../views/taskCollectionView';
import TaskCollectionController from '../controllers/taskCollectionController';

class ContainerView extends AbstractView {
    constructor(model) {
        super(model);
    }

    render() {
        // const taskCollectionModel = this.model;
        const taskCollectionView = new TaskCollectionView(this.model);
        const taskCollectionController = new TaskCollectionController(this.model);
        // this.controller.setListObjects();
        // this.controller.setFormObjects();
        // const formModel = new FormModel();
        const formView = new FormView(this.model);
        // const formController = new FormController(formModel, taskCollectionController);

        formView.controller = taskCollectionController;
        // formView.controller = formController;
        // formView.taskCollectionController = taskCollectionController;

        taskCollectionView.controller = taskCollectionController;
        taskCollectionView.rootEl = this.rootEl.querySelector('.container__list');
        taskCollectionView.render();

        // const taskCollectionView = this.model.get('list').taskCollectionView;
        // const formView = this.model.get('form').formView;


        // taskCollectionView.rootEl = this.rootEl.querySelector('.container__list');
        formView.rootEl = this.rootEl.querySelector('.container__form');
        // this.model.fireEvent('rendered');
        formView.init();
        formView.render();
        // formView.render();
    }
}

export default ContainerView;

