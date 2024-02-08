import TaskView from './taskView';
import TaskModel from '../../models/taskModel';
import '../../../styles/base/_index.scss';

export default {
    title: 'List Element',
    tags: ['autodocs'],
    render: ({text}) => {
        const taskModel = new TaskModel();
        const btn = new TaskView(taskModel);

        taskModel.set('task', text);
        btn.render();
        return btn.rootEl;
    },
    argTypes: {
        text: {control: 'text'},
    },
};

export const listElement = {
    args: {
        text: 'Tidy the garage',
    },
};
