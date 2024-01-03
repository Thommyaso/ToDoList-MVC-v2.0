import './style.scss';
import tasks from './exampleTasks.json';

// import ContainerModel from './lib/models/containerModel';
import ContainerView from './lib/views/containerView';
// import ContainerController from './lib/controllers/containerController';
import TaskCollectionModel from './lib/models/taskCollectionModel';

document.addEventListener('DOMContentLoaded', () => {
    const taskCollectionModel = TaskCollectionModel.fromJSON(tasks);

    // const toDoListContainer = document.querySelector('#listContainer');
    // const containerModel = new ContainerModel();
    const containerView = new ContainerView(taskCollectionModel);
    // const containerController = new ContainerController(taskCollectionModel);
    // const exampleTasks = JSON.parse(JSON.stringify(tasks));
    // containerView.controller = containerController;
    containerView.rootEl = document.querySelector('#listContainer');
    containerView.render();

    // exampleTasks.forEach((element) => {
    //     const taskCollectionController = containerModel.get('list').taskCollectionController;
    //     taskCollectionController.addedTask(element.task);
    // });
});

