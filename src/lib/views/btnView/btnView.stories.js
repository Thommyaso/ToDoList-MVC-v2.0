import BtnView from './btnView';
import '../../../styles/base/_index.scss';

export default {
    title: 'Buttons',
    tags: ['autodocs'],
    render: (options) => {
        const btn = new BtnView();

        btn.render(options);
        return btn.rootEl;
    },
    argTypes: {
        // text: {control: 'text'},
    },
};

export const deleteButton2 = {
    args: {
        mode: 'delete',
    },
};

export const addButton2 = {
    args: {
        mode: 'add',
    },
};
