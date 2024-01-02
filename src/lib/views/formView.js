import AbstractView from '../Abstracts/view';
import logger from '../utils/logger';

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
            const error = new Error('textarea not available');
            throw logger.error(error);
        }
    }

    setEventListener() {
        if (this.submitBtn) {
            this.submitBtn.addEventListener('click', this._submitClickHandler);
        } else {
            const error = new Error('submit button not available');
            throw logger.error(error);
        }
    }

    update() {
        this.taskCollectionController.addedTask(this.model.get('text'));
        this.textarea.value = '';
    }

    render() {
        this.extractElements();
        this.setEventListener();
    }
}

export default FormView;
