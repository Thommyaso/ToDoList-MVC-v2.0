import AbstractView from '../Abstracts/view';

class FormView extends AbstractView {
    constructor(model) {
        super(model);
        this._taskCollectioncontroller = null;
        this.textarea = null;
        this.submitBtn = null;
        this._submitClickHandler = this.submitClickHandler.bind(this);
    }

    get taskCollectionController() {
        return this._taskCollectionController;
    }

    set taskCollectionController(controller) {
        this._taskCollectionController = controller;
    }

    extractElements() {
        this.textarea = this.rootEl.querySelector('.container__textarea');
        this.submitBtn = this.rootEl.querySelector('.container__submitBtn');
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
            this.submitBtn.addEventListener('click', this._submitClickHandler);
        } else {
            console.error('submit button not available');
        }
    }

    update() {
        this.taskCollectioncontroller.addedTask(this.model.properties.text);
        this.textarea.value = '';
    }

    render() {
        this.extractElements();
        this.setEventListener();
    }
}

export default FormView;
