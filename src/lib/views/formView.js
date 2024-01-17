import AbstractView from '../Abstracts/view';

class FormView extends AbstractView {
    constructor(model) {
        super(model);

        this.textarea = null;
        this.submitBtn = null;
    }

    init() {
        const data = {class: 'container__alert-active'};
        const customEvent = new CustomEvent('onValidation', {detail: data});

        this.textarea = this.rootEl.querySelector('.container__textarea');
        this.submitBtn = this.rootEl.querySelector('.container__submitBtn');
        this.submitBtn.addEventListener('click', () => {
            this.submitBtn.disabled = true;

            const task = this.textarea.value;

            if ((task.length > 0)) {
                this.controller.createTask(task)
                    .then(() => {
                        data.status = true;
                        this.render();
                    })
                    .catch((error) => {
                        data.status = false;
                        data.message = error;
                        console.error(error);
                    })
                    .finally(() => {
                        this.rootEl.dispatchEvent(customEvent);
                        this.submitBtn.disabled = false;
                    });
            } else {
                data.status = false;
                data.message = 'invalid task';
                this.rootEl.dispatchEvent(customEvent);
                this.submitBtn.disabled = false;
                return;
            }
        });
    }

    render() {
        this.textarea.value = null;
    }
}

export default FormView;
