import AbstractView from '../Abstracts/view';

class FormView extends AbstractView {
    constructor(model) {
        super(model);

        this.textarea = null;
        this.submitBtn = null;
    }

    init() {
        const data = {};
        const customEvent = new CustomEvent('onValidation', {detail: data});

        this.textarea = this.rootEl.querySelector('.container__textarea');
        this.submitBtn = this.rootEl.querySelector('.container__submitBtn');
        this.submitBtn.addEventListener('click', () => {
            const task = this.textarea.value;

            if ((task.length > 0)) {
                data.value = true;
                this.rootEl.dispatchEvent(customEvent);
                this.controller.createTask(task)
                    .then(() => {
                        this.render();
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            } else {
                data.value = false;
                this.rootEl.dispatchEvent(customEvent);
                return;
            }
        });
    }

    render() {
        this.textarea.value = null;
    }
}

export default FormView;
