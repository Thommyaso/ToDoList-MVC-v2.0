import './style.scss';
import ContainerView from './lib/views/containerView/containerView';
import TaskCollectionModel from './lib/models/taskCollectionModel';

document.addEventListener('DOMContentLoaded', () => {
    const taskCollectionModel = new TaskCollectionModel();
    const containerView = new ContainerView(taskCollectionModel);

    containerView.rootEl = document.querySelector('#listContainer');
    containerView.render();
});

