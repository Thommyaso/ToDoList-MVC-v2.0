import AbstractView from '../Abstracts/view';
import FormView from '../views/formView';
import TaskCollectionView from '../views/taskCollectionView';
import TaskController from '../controllers/taskController';

class ContainerView extends AbstractView {
    constructor(model) {
        super(model);
    }

    async render() {
        const taskController = new TaskController(this.model);
        const taskCollectionView = new TaskCollectionView(this.model);
        const formView = new FormView(this.model);

        taskCollectionView.rootEl = this.rootEl.querySelector('.container__list');
        taskCollectionView.rootEl.addEventListener('onTaskDelete', (data) => {
            taskController.removeTaskById(data.detail.id)
                .catch(() => {
                    console.log(`deleting task with id: "${data.detail.id}" failed`);
                });
        });

        formView.rootEl = this.rootEl.querySelector('.container__form');
        formView.init();
        formView.render();
        formView.rootEl.addEventListener('onTaskSubmit', (data) => {
            taskController.createTask(data.detail.task)
                .then(() => {
                    formView.render();
                })
                .catch((error) => {
                    console.error(error);
                });
        });
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

