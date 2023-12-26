class AbstractController {
    constructor(model) {
        if (new.target === AbstractController) {
            throw new TypeError('Cannot instantiate abstract class directly');
        }

        this.model = model;
    }

    getView() {
        return this.View;
    }

    getModel() {
        return this.model;
    }

    setView(newView) {
        this.view = newView;
    }

    setModel(newModel) {
        this.model = newModel;
    }
}

export default AbstractController;
