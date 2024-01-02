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

        this.model.properties.list.collectionModel = taskCollectionModel;
        this.model.properties.list.collectionView = taskCollectionView;
        this.model.properties.list.collectionController = taskCollectionController;

        taskCollectionModel.addObserver('updated', () => {
            taskCollectionView.render();
        });
        taskCollectionView.controller = taskCollectionController;
    }

    setFormObjects() {
        const formModel = new FormModel();
        const formView = new FormView(formModel);
        const formController = new FormController(formModel, this.model.properties.list.collectionController);

        this.model.properties.form.formModel = formModel;
        this.model.properties.form.formView = formView;
        this.model.properties.form.formController = formController;

        formView.controller = formController;
        formView.taskCollectioncontroller = this.model.properties.list.collectionController;
        formModel.addObserver('enteredNewTask', () => {
            formView.update();
        });
    }
}

export default ContainerController;
