import './style.scss';

import TaskCollectionModel from './lib/models/taskCollectionModel';
import TaskCollectionView from './lib/views/taskCollectionView';
import TaskCollectionController from './lib/controllers/taskCollectionController';

document.addEventListener('DOMContentLoaded', () => {


    const list = document.querySelector('.container__list');
    const taskCollectionModel = new TaskCollectionModel();
    const taskCollectionController = new TaskCollectionController(taskCollectionModel);
    const taskCollectionView = new TaskCollectionView(taskCollectionModel);

    taskCollectionModel.addObserver('newTask', taskCollectionView);
    taskCollectionView.initialize(list, taskCollectionController);

    taskCollectionView.handleAddedTask('go do this');
    taskCollectionView.handleAddedTask('go do that');
    taskCollectionView.handleAddedTask('king in the castle');
    taskCollectionView.handleAddedTask('uauauiua');
    // console.log(taskCollectionModel.properties.tasks[0]);
});
