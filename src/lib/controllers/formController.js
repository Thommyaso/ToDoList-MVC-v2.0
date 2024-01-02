import AbstractController from '../Abstracts/controller';

class FormController extends AbstractController {
    constructor(model) {
        super(model);
    }

    handleEnteredValue(text) {
        this.model.removeKey('text');
        this.model.set('text', text);
        this.model.fireEvent('enteredNewTask');
    }

}

export default FormController;
