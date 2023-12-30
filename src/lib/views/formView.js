import AbstractView from '../Abstracts/view';

class FormView extends AbstractView {
    constructor(model, taskCollectionController) {
        super(model);
        this.taskCollectionController = taskCollectionController;
        this.textarea = null;
        this.submitBtn = null;
        this.submitClickHandler = this.submitClickHandler.bind(this);
    }

    extractElements() {
        this.textarea = this._rootEl[0];
        this.submitBtn = this._rootEl[1];
    }

    submitClickHandler() {
        if (this.textarea) {
            this.controller.handleEnteredValue(this.textarea.value);
        } else {
            console.error('textarea not available');
        }
    }

    setEventListener() {
        if (this.submitBtn) {
            this.submitBtn.addEventListener('click', this.submitClickHandler);
        } else {
            console.error('submit button not available');
        }
    }

    update() {
        this.taskCollectionController.addedTask(this.model.properties.text);
        this.textarea.value = '';
    }

    render() {
        this.extractElements();
        this.setEventListener();
    }
}

export default FormView;
