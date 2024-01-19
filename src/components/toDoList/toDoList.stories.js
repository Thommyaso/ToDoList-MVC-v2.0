import {createToDoList} from './toDoList';
import {createForm} from '../form/form';
import {mainForm} from '../form/form.stories';
import {createTaskLIst} from '../taskList/taskList';
import {exampleTaskList} from '../taskList/taskList.stories';

export default {
    title: 'To-Do list',
    tags: ['autodocs'],
    render: ({children, backgroundColor}) => {
        return createToDoList({children, backgroundColor});
    },
    argTypes: {
        children: {control: {type: null}},
        backgroundColor: {control: 'color'},
    },
};

export const exampleToDoList = {
    args: {
        children: [
            createTaskLIst(exampleTaskList.args),
            createForm(mainForm.args),
        ],
    },
};
