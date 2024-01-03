import './style.scss';
import tasks from './exampleTasks.json';

import ContainerView from './lib/views/containerView';
import TaskCollectionModel from './lib/models/taskCollectionModel';

document.addEventListener('DOMContentLoaded', () => {
    const taskCollectionModel = TaskCollectionModel.fromJSON(tasks);
    const containerView = new ContainerView(taskCollectionModel);

    containerView.rootEl = document.querySelector('#listContainer');
    containerView.render();
});

