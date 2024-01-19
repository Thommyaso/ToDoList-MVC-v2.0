import {createForm} from './form';
import {createBtn} from '../buttons/Btn';
import {submitButton} from '../buttons/Btn.stories';
import {createTextarea} from '../textarea/textarea';
import {textarea} from '../textarea/textarea.stories';

export default {
    title: 'Form',
    tags: ['autodocs'],
    render: ({...args}) => {
        return createForm({...args});
    },
    argTypes: {
        height: {control: 'text'},
        width: {control: 'text'},
        backgroundColor: {control: 'color'},
        color: {control: 'color'},
    },
};

export const mainForm = {
    args: {
        children: [
            createTextarea(textarea.args),
            createBtn(submitButton.args),
        ],
    },
};
