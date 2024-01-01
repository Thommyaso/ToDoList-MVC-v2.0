import AbstractModel from '../Abstracts/model';

class TaskCollectionModel extends AbstractModel {
    constructor() {
        super();

        this.properties = {
            tasks: [],
        };
    }

}

export default TaskCollectionModel;
