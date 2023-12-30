import './style.scss';

import ContainerModel from './lib/models/containerModel';
import ContainerView from './lib/views/containerView';
import ContainerController from './lib/controllers/containerController';

document.addEventListener('DOMContentLoaded', () => {

    const toDoListContainer01 = 'listContainer01';
    const containerModel = new ContainerModel();
    const containerView = new ContainerView(containerModel);
    const containerController = new ContainerController(containerModel);

    containerView.initialize(toDoListContainer01, containerController);
    containerView.render();
});
