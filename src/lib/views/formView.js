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
            this.controller.createTask(this.textarea.value)
                .then(() => {
                    this.render();
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    }

    render() {
        this.textarea.value = '';
    }
}

export default FormView;
