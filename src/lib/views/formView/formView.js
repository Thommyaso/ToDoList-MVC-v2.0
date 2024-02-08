import AbstractView from '../../Abstracts/view';
import BtnView from '../btnView/btnView';
import './formView.scss';

class FormView extends AbstractView {
    constructor(model) {
        super(model);

        this.textarea = null;
        this.submitBtn = null;
    }

    _emitAddTask(event) {
        event.preventDefault();
        const customEvent = new CustomEvent('onTaskSubmit', {detail: {
            task: this.textarea.value,
        }});

        this.rootEl.dispatchEvent(customEvent);
    }

    init() {
        const btn = new BtnView();
        btn.render({mode: 'add'});
        btn.type = 'submit';
        const textarea = document.createElement('textarea');
        textarea.classList.add('container__textarea');
        btn.rootEl.classList.add('container__submitBtn');
        this.textarea = textarea;
        this.submitBtn = btn.rootEl;
        this.rootEl.appendChild(textarea);
        this.rootEl.appendChild(this.submitBtn);

        this.submitBtn.addEventListener('click', function (event) {
            this._emitAddTask(event);
        }.bind(this));
    }

    render() {
        this.textarea.value = '';
    }
}

export default FormView;
