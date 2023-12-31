import AbstractModel from '../Abstracts/model';

class TaskCollectionModel extends AbstractModel {
    constructor() {
        super();

        this.properties = {
            tasks: [],
            views: [],
        };
    }

}

export default TaskCollectionModel;
