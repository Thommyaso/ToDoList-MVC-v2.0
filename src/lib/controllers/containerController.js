import AbstractController from '../Abstracts/controller';

import TaskCollectionModel from '../models/taskCollectionModel';
import TaskCollectionView from '../views/taskCollectionView';
import TaskCollectionController from './taskCollectionController';

import FormController from './formController';
import FormModel from '../models/formModel';
import FormView from '../views/formView';

class ContainerController extends AbstractController {
    constructor(model) {
        super(model);
    }

    setListObjects() {
        const taskCollectionModel = new TaskCollectionModel();
        const taskCollectionView = new TaskCollectionView(taskCollectionModel);
        const taskCollectionController = new TaskCollectionController(taskCollectionModel);

        this.model.set('list', {
            taskCollectionModel,
            taskCollectionView,
            taskCollectionController,
        });

        taskCollectionModel.addObserver('updated', () => {
            taskCollectionView.render();
        });
        taskCollectionView.controller = taskCollectionController;
    }

    setFormObjects() {
        const formModel = new FormModel();
        const formView = new FormView(formModel);
        const taskCollectionController = this.model.get('list').taskCollectionController;
        const formController = new FormController(formModel, taskCollectionController);

        this.model.set('form', {
            formModel,
            formView,
            formController,
        });

        formView.controller = formController;
        formView.taskCollectionController = taskCollectionController;
        formModel.addObserver('enteredNewTask', () => {
            formView.update();
        });
    }
}

export default ContainerController;
