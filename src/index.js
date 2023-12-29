/* eslint-disable no-unused-vars */
// import './style.scss';
// import MainController from './lib/controllers/mainController';
// import /* MainModel */ TaskCollectionModel from './lib/models/mainModel';
// import MainView from './lib/views/mainView';

// document.addEventListener('DOMContentLoaded', () => {
//     const model = new TaskCollectionModel();
//     const controller = new MainController(model);
//     const view = new MainView();
//     const mainRootEl = document.querySelector('.container__list');

//     view.initialize(mainRootEl, controller);
// });


// --> manually create single list task <--
import TaskModel from './lib/models/taskModel';
import TaskView from './lib/views/taskView';
import TaskController from './lib/controllers/taskController';
/* const taskModel = TaskModel.fromString('task', 'go do this aaa');
const taskView = new TaskView(taskModel); */

/* const taskModel = TaskModel.fromString('task', 'go do this aaa');
const taskView = new TaskView(taskModel);
const taskController = new TaskController(taskModel);
taskView.initialize('', taskController);
*/


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

    const taskModel = TaskModel.fromString('task', '' /* 'go do this aaa' */);
    const taskView = new TaskView(taskModel);
    taskModel.addObserver('addTask', taskView);
    const taskController = new TaskController(taskModel);
    taskView.initialize('', taskController);
    taskView.handleTask('go do thidddddddddddds');
    // taskCollectionModel.fireEvent('newTask');


    taskCollectionView.handleAddedTask(taskView.render());
    // console.log(taskCollectionModel);
    // console.log(taskView.render());
});
