import AbstractView from '../Abstracts/view';
import FormView from '../views/formView';
import TaskCollectionView from '../views/taskCollectionView';
import TaskController from '../controllers/taskController';

class ContainerView extends AbstractView {
    constructor(model) {
        super(model);

        this.messageEl = null;
    }

    async render() {
        const taskController = new TaskController(this.model);
        const taskCollectionView = new TaskCollectionView(this.model);
        const formView = new FormView(this.model);

        taskCollectionView.controller = taskController;
        taskCollectionView.rootEl = this.rootEl.querySelector('.container__list');

        this.messageEl = this.rootEl.querySelector('.container__alert');
        this.messageEl.innerHTML = 'invalid task';

        formView.controller = taskController;
        formView.rootEl = this.rootEl.querySelector('.container__form');
        formView.init();
        formView.rootEl.addEventListener('onValidation', (isValid) => {
            if (isValid.detail.value) {
                this.messageEl.classList.remove('container__alert-active');
                return;
            }
            this.messageEl.classList.add('container__alert-active');
        });
        formView.render();

        taskCollectionView.showLoader();
        taskController.getTasks()
            .then(() => {
                taskCollectionView.render();
            })
            .catch((error) => {
                taskCollectionView.showError();
                console.error(error);
            });
    }
}

export default ContainerView;

