import {createTaskLIst} from './taskList';
import {createLiEl} from '../listElement/listEl';
import {
    listElement01,
    listElement02,
    listElement03,
    listElement04,
} from '../listElement/listEl.stories';


export default {
    title: 'List',
    tags: ['autodocs'],
    render: ({children}) => {
        return createTaskLIst({children});
    },
    argTypes: {
        children: {control: {type: null}},
    },
};


export const exampleTaskList = {
    args: {
        children: [
            createLiEl(listElement01.args),
            createLiEl(listElement02.args),
            createLiEl(listElement03.args),
            createLiEl(listElement04.args),
            createLiEl(listElement01.args),
        ],
    },
};
