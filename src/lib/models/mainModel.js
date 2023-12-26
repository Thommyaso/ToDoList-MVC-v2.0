import AbstractModel from '../Abstracts/model';

class MainModel extends AbstractModel {
    constructor() {
        super();

        this.tasks = ['go do this', 'go do that', 'king in the castle', 'uauauiua'];
    }

    removeTask(index) {
        console.log(index);
        this.tasks.splice(index, 1);
        this.fireEvent('change', this.tasks);
    }

    addTask(task) {
        this.tasks.push(task);
        this.fireEvent('change', this.tasks);
    }
}

export default MainModel;
