import AbstractView from '../../Abstracts/view';
import './alertView.scss';

class AlertView extends AbstractView {
    constructor() {
        super();
    }

    hide() {
        this.rootEl.className = 'container__alert container__alert-hidden';
    }

    info(message) {
        this.rootEl.innerHTML = message;
        this.rootEl.className = 'container__alert container__alert-info';
    }

    error(message) {
        this.rootEl.innerHTML = message;
        this.rootEl.className = 'container__alert container__alert-error';
    }

    render() {
        const alert = document.createElement('p');
        alert.className = 'container__alert container__alert-hidden';
        this.rootEl = alert;
    }
}

export default AlertView;
