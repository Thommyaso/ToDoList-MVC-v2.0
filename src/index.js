import './style.scss';

import ContainerModel from './lib/models/containerModel';
import ContainerView from './lib/views/containerView';
import ContainerController from './lib/controllers/containerController';

document.addEventListener('DOMContentLoaded', () => {

    const toDoListContainer = document.querySelector('#listContainer');
    const containerModel = new ContainerModel();
    const containerView = new ContainerView(containerModel);
    const containerController = new ContainerController(containerModel);

    containerView.controller = containerController;
    containerView.rootEl = toDoListContainer;
    containerView.render();
});
