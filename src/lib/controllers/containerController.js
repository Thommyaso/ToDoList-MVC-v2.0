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

    setListObjects(rootEl) {
        const taskCollectionModel = new TaskCollectionModel();
        this.model.properties.list.collectionModel = taskCollectionModel;

        const taskCollectionView = new TaskCollectionView(taskCollectionModel);
        this.model.properties.list.collectionView = taskCollectionView;

        const taskCollectionController = new TaskCollectionController(taskCollectionModel);
        this.model.properties.list.collectionController = taskCollectionController;

        taskCollectionModel.addObserver('newTask', taskCollectionView);
        taskCollectionView.initialize(rootEl, taskCollectionController);
    }

    setFormObjects(rootEl) {
        const formModel = new FormModel();
        this.model.properties.form.formModel = formModel;

        const formView = new FormView(formModel, this.model.properties.list.collectionController);
        this.model.properties.form.formView = formView;

        const formController = new FormController(formModel, this.model.properties.list.collectionController);
        this.model.properties.form.formController = formController;

        formModel.addObserver('enteredNewTask', formView);
        formView.initialize(rootEl, formController);
        formView.render();
    }

    exampleTasks() {
        this.model.properties.list.collectionController.addedTask('go do this');
        this.model.properties.list.collectionController.addedTask('go do that');
        this.model.properties.list.collectionController.addedTask('king in the castle');
        this.model.properties.list.collectionController.addedTask('uauauiua');
        console.log(this.model.properties);
    }

}

export default ContainerController;
