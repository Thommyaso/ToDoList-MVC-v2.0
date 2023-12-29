/* import AbstractController from '../Abstracts/controller';
import MainView from '../views/mainView';

class MainController extends AbstractController {
    constructor(model) {
        super(model);

        this.setView(new MainView(this.model, this));
        this.model.addObserver('change', this.getView());
        this.textareaListener = this.getView().setTextareaListener();
    }

    initialize() {
        this.view.render(this.getModel().tasks);
    }

    addTask(task) {
        this.getModel().addTask(task);
    }

    handleDeleteClick(index) {
        this.getModel().removeTask(index);
    }
}

export default MainController;
 */
