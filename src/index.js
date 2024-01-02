import './style.scss';
import tasks from './exampleTasks.json';

import ContainerModel from './lib/models/containerModel';
import ContainerView from './lib/views/containerView';
import ContainerController from './lib/controllers/containerController';

document.addEventListener('DOMContentLoaded', () => {

    const toDoListContainer = document.querySelector('#listContainer');
    const containerModel = new ContainerModel();
    const containerView = new ContainerView(containerModel);
    const containerController = new ContainerController(containerModel);
    const exampleTasks = JSON.parse(JSON.stringify(tasks));

    containerView.controller = containerController;
    containerView.rootEl = toDoListContainer;
    containerView.render();

    exampleTasks.forEach((element) => {
        const taskCollectionController = containerModel.get('list').taskCollectionController;
        taskCollectionController.addedTask(element.task);
    });
});

