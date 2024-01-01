import './style.scss';

import ContainerModel from './lib/models/containerModel';
import ContainerView from './lib/views/containerView';
import ContainerController from './lib/controllers/containerController';

document.addEventListener('DOMContentLoaded', () => {

    const toDoListContainer01 = document.querySelector('#listContainer01');
    const containerModel01 = new ContainerModel();
    const containerView01 = new ContainerView(containerModel01);
    const containerController01 = new ContainerController(containerModel01);

    containerView01.controller = containerController01;
    containerView01.rootEl = toDoListContainer01;
    containerView01.render();
});
