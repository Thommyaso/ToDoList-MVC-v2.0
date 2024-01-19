import {createLiEl} from './listEl';

export default {
    title: 'List element',
    tags: ['autodocs'],
    render: ({innerHTML, ...args}) => {
        return createLiEl({innerHTML, ...args});
    },
    argTypes: {
        innerHTML: {control: 'text'},
        color: {control: 'color'},
        backgroundColor: {control: 'color'},
    },
};

export const listElement = {
    args: {
        innerHTML: 'go do this',
    }};
