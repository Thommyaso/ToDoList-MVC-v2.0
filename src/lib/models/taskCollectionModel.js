import AbstractModel from '../Abstracts/model';
// import TaskModel from './taskModel';
// import TaskView from '../views/taskView';

class TaskCollectionModel extends AbstractModel {
    constructor() {
        super();

        this.properties.tasks = [];
    }

}

export default TaskCollectionModel;
