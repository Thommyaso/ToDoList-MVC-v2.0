import {createBtn} from './Btn';

export default {
    title: 'Buttons',
    tags: ['autodocs'],
    render: ({label, cssClass, ...args}) => {
        return createBtn({label, cssClass, ...args});
    },
    argTypes: {
        label: {control: 'text'},
        cssClass: {control: {type: null}},
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
        cssClass: 'container__elementDeleteBtn',
    },
};

export const submitButton = {
    args: {
        onClick: () => {
            // eslint-disable-next-line no-alert
            alert('clicked!');
        },
        cssClass: 'container__submitBtn',
    },
};
