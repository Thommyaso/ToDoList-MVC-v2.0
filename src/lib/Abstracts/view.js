class AbstractView {
    constructor(model) {
        if (new.target === AbstractView) {
            throw new TypeError('Cannot instantiate abstract class directly');
        }

        this.model = model;
        this._rootEl = null;
        this._controller = null;
    }

    getModel() {
        return this.model;
    }

    get controller() {
        return this._controller;
    }

    set controller(newController) {
        this._controller = newController;
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

    render() {
        // set up in child class
    }

    update() {
        // set up in child class
    }
}

export default AbstractView;
