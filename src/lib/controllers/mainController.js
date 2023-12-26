import AbstractController from '../Abstracts/controller';
import MainView from '../views/mainView';

class MainController extends AbstractController {
    constructor(model) {
        super(model);

        this.setView(new MainView(this.model, this));
        this.model.addObserver('change', this.view);
        this.listen = this.view.getTask();
    }

    initialize() {
        this.view.render(this.model.tasks);
    }

    addTask(task) {
        this.model.addTask(task);
    }

    handleDeleteClick(index) {
        this.model.removeTask(index);
        console.log('fuck');
    }
}

export default MainController;
