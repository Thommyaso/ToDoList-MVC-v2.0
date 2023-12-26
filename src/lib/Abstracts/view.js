class AbstractView {
    constructor(model, controller) {
        if (new.target === AbstractView) {
            throw new TypeError('Cannot instantiate abstract class directly');
        }

        this.controller = controller;
        this.model = model;
    }

    getModel() {
        return this.model;
    }

    getController() {
        return this.controller;
    }

    getRootEl() {
        return this.rootEl;
    }

    setController(newController) {
        this.controller = newController;
    }

    setModel(newModel) {
        this.model = newModel;
    }

    setRootEl(newRootEll) {
        this.rootEl = newRootEll;
    }

    render() {
        // this method will be modified in subclasses
    }
}

export default AbstractView;
