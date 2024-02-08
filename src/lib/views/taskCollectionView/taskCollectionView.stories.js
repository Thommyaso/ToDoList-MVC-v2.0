import TaskCollectionView from './taskCollectionView';
import TaskCollectionModel from '../../models/taskCollectionModel';
import TaskModel from '../../models/taskModel';
import '../../../styles/base/_index.scss';

export default {
    title: 'collection',
    tags: ['autodocs'],
    render: () => {
        const taskModel = TaskModel.fromJSON({id: '123', task: 'Buy milk: 2l'});
        const taskCollectionModel = new TaskCollectionModel();
        const rootEl = document.createElement('div');
        const taskCollectionView = new TaskCollectionView(taskCollectionModel);

        rootEl.classList.add('.container__list');
        taskCollectionModel.set('tasks', [taskModel, taskModel, taskModel]);
        taskCollectionView.rootEl = rootEl;
        taskCollectionView.render();
        return taskCollectionView.rootEl;
    },
};

export const listElement = {
    args: {
    },
};
