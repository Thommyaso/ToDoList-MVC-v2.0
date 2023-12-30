import './style.scss';

import TaskCollectionModel from './lib/models/taskCollectionModel';
import TaskCollectionView from './lib/views/taskCollectionView';
import TaskCollectionController from './lib/controllers/taskCollectionController';

import FormController from './lib/controllers/formController';
import FormModel from './lib/models/formModel';
import FormView from './lib/views/formView';


document.addEventListener('DOMContentLoaded', () => {

    // Set up list
    const list = document.querySelector('#list01');
    const taskCollectionModel = new TaskCollectionModel();
    const taskCollectionController = new TaskCollectionController(taskCollectionModel);
    const taskCollectionView = new TaskCollectionView(taskCollectionModel);

    taskCollectionModel.addObserver('newTask', taskCollectionView);
    taskCollectionView.initialize(list, taskCollectionController);


    // Set up form
    const form = document.querySelector('#form');
    const formModel = new FormModel();
    const formController = new FormController(formModel);
    const formView = new FormView(formModel, taskCollectionController);

    formModel.addObserver('enteredNewTask', formView);
    formView.initialize(form, formController);
    formView.render();


    // Example tasks
    taskCollectionController.addedTask('go do this');
    taskCollectionController.addedTask('go do that');
    taskCollectionController.addedTask('king in the castle');
    taskCollectionController.addedTask('uauauiua');
});
