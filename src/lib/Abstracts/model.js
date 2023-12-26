import AbstractObserver from './observer';

class AbstractModel extends AbstractObserver {
    constructor() {
        if (new.target === AbstractModel) {
            throw new TypeError('Cannot instantiate abstract class directly');
        }

        super();

        this.properties = {};
    }

    get(key) {
        if (!(key in this.properties)) {
            console.error(`Property "${key}" not found`);
        } else {
            return this.properties[key];
        }
    }

    set(key, value) {
        if (!(key in this.properties)) {
            this.properties[key] = value;
        } else {
            console.error(`Property "${key}" already exists and cannot be modified`);
        }
    }

    remove(key) {
        delete this.properties[key];
    }

    cleanCollection() {
        this.properties = {};
    }
}

export default AbstractModel;
