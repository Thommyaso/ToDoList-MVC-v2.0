import AlertView from './alertView';
import '../../../styles/base/_index.scss';

export default {
    title: 'Alerts',
    tags: ['autodocs'],
    render: ({mode, message}) => {
        const alert = new AlertView();
        alert.rootEl = document.createElement('p');
        if (mode === 'info') {
            alert.info(message);
        } else if (mode === 'error') {
            alert.error(message);
        }
        return alert.rootEl;
    },
    argTypes: {
        message: {control: 'text'},
    },
};

export const infoAlert = {
    args: {
        mode: 'info',
        message: 'Loading...',
    },
};

export const errorAlert = {
    args: {
        mode: 'error',
        message: 'Can not load tasks',
    },
};
