import AbstractObserver from './observer';
import logger from '../utils/logger';

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
            const error = new Error(`Property "${key}" not found`);
            throw logger.error(error);
        } else {
            return this.properties[key];
        }
    }

    set(key, value) {
        if (!(key in this.properties)) {
            this.properties[key] = value;
        } else {
            const error = new Error(`Property "${key}" already exists and cannot be modified`);
            throw logger.error(error);
        }
    }

    removeKey(key) {
        delete this.properties[key];
        this.fireEvent('removedKey');
    }

    cleanCollection() {
        this.properties = {};
    }
}

export default AbstractModel;
