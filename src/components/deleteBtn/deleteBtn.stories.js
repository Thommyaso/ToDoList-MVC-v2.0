import {createBtn} from './deleteBtn';

export default {
    title: 'Buttons',
    tags: ['autodocs'],
    render: ({label, ...args}) => {
        return createBtn({label, ...args});
    },
    argTypes: {
        label: {control: 'text'},
        onClick: {control: {type: null}},
        backgroundColor: {control: 'color'},
        icon: {control: {type: 'file', accept: '.png'}},
    },
};

export const deleteButton = {
    args: {
        onClick: () => {
            // eslint-disable-next-line no-alert
            alert('clicked!');
        },
        icon: require('../assets/trash-can.png'),
    },
};
