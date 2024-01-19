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

export const listElement01 = {
    args: {
        innerHTML: 'go do this',
    }};

export const listElement02 = {
    args: {
        innerHTML: 'go do that',
    }};


export const listElement03 = {
    args: {
        innerHTML: 'king in the castle',
    }};

export const listElement04 = {
    args: {
        innerHTML: 'uauauiua',
    }};
