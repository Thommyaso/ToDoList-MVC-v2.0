import AbstractView from '../Abstracts/view';

class FormView extends AbstractView {
    constructor(model) {
        super(model);

        this.textarea = null;
        this.submitBtn = null;
    }

    _emitAddTask() {
        const customEvent = new CustomEvent('onTaskSubmit', {detail: {
            task: this.textarea.value,
        }});

        this.rootEl.dispatchEvent(customEvent);
    }

    init() {
        this.textarea = this.rootEl.querySelector('.container__textarea');
        this.submitBtn = this.rootEl.querySelector('.container__submitBtn');
        this.submitBtn.addEventListener('click', this._emitAddTask.bind(this));
    }

    render() {
        this.textarea.value = '';
    }
}

export default FormView;
