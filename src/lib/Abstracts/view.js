class AbstractView {
    constructor(model) {
        if (new.target === AbstractView) {
            throw new TypeError('Cannot instantiate abstract class directly');
        }

        this.model = model;
        this._rootEl = '';
        this.controller = '';
    }

    getModel() {
        return this.model;
    }

    getController() {
        return this.controller;
    }

    /*     getRootEl() {
        return this.rootEl;
    } */

    setController(newController) {
        this.controller = newController;
    }

    setModel(newModel) {
        this.model = newModel;
    }

    get rootEl() {
        return this._rootEl;
    }

    set rootEl(newRootEll) {
        this._rootEl = newRootEll;
    }

    initialize(rootEl, controller) {
        this.rootEl = rootEl;
        this.controller = controller;
    }

    render() {
        // this method will be modified in subclasses
    }

    update(data) {
        this.render(data);
    }
}

export default AbstractView;
