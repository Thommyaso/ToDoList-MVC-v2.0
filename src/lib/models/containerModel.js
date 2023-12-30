import AbstractModel from '../Abstracts/model';

class ContainerModel extends AbstractModel {
    constructor() {
        super();

        this.properties = {
            list: {},
            form: {},
        };
    }
}

export default ContainerModel;
