/* eslint-disable max-len */
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
        this.model.properties.list.collectionModel = new TaskCollectionModel();
        this.model.properties.list.collectionView =
         new TaskCollectionView(this.model.properties.list.collectionModel);
        this.model.properties.list.collectionController =
         new TaskCollectionController(this.model.properties.list.collectionModel);

        this.model.properties.list.collectionModel.addObserver(
            'newTask', this.model.properties.list.collectionView);
        this.model.properties.list.collectionView.initialize(
            rootEl, this.model.properties.list.collectionController);

    }

    setFormObjects(rootEl) {
        this.model.properties.form.formModel = new FormModel();
        this.model.properties.form.formView = new FormView(
            this.model.properties.form.formModel, this.model.properties.list.collectionController);
        this.model.properties.form.formController =
        new FormController(this.model.properties.form.formModel, this.model.properties.list.collectionController);

        this.model.properties.form.formModel.addObserver(
            'enteredNewTask', this.model.properties.form.formView);
        this.model.properties.form.formView.initialize(
            rootEl, this.model.properties.form.formController);
        this.model.properties.form.formView.render();

    }

    exampleTasks() {
        this.model.properties.list.collectionController.addedTask('go do this');
        this.model.properties.list.collectionController.addedTask('go do that');
        this.model.properties.list.collectionController.addedTask('go do them');
        this.model.properties.list.collectionController.addedTask('go do you');
    }

}

export default ContainerController;
