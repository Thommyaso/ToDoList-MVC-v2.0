import FormView from './formView';
import '../../../styles/base/_index.scss';

export default {
    title: 'Form',
    tags: ['autodocs'],
    render: () => {
        const form = new FormView();
        const root = document.createElement('form');

        root.classList.add('container__form');
        form.rootEl = root;
        form.init();
        return form.rootEl;
    },
};

export const form = {
    args: {
    },
};
