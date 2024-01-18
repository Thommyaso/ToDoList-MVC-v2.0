import AbstractView from '../Abstracts/view';

class FormView extends AbstractView {
    constructor(model) {
        super(model);

        this.textarea = null;
        this.submitBtn = null;
    }

    init() {
        this.textarea = this.rootEl.querySelector('.container__textarea');
        this.submitBtn = this.rootEl.querySelector('.container__submitBtn');
        this.submitBtn.addEventListener('click', () => {
            const task = {task: this.textarea.value};
            const customEvent = new CustomEvent('onTaskSubmit', {detail: task});

            task.task = this.textarea.value;
            this.rootEl.dispatchEvent(customEvent);
        });
    }

    render() {
        this.textarea.value = '';
    }
}

export default FormView;
