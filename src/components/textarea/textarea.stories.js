import {createTextarea} from './textarea';

export default {
    title: 'Textarea',
    tags: ['autodocs'],
    render: ({...args}) => {
        return createTextarea({...args});
    },
    argTypes: {
        height: {control: 'text'},
        width: {control: 'text'},
        backgroundColor: {control: 'color'},
        color: {control: 'color'},
    },
};

export const textarea = {
    args: {
    },
};
