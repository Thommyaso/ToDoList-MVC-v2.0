import AbstractView from '../Abstracts/view';
import FormView from '../views/formView';
import TaskCollectionView from '../views/taskCollectionView';
import TaskController from '../controllers/taskController';
import AlertView from './alertView';

class ContainerView extends AbstractView {
    constructor(model) {
        super(model);
    }

    async render() {
        const taskController = new TaskController(this.model);
        const taskCollectionView = new TaskCollectionView(this.model);
        const formView = new FormView(this.model);
        const alertView = new AlertView();

        alertView.render();
        this.rootEl.prepend(alertView.rootEl);
        alertView.info('loading');

        taskCollectionView.rootEl = this.rootEl.querySelector('.container__list');
        taskCollectionView.rootEl.addEventListener('onTaskDelete', (data) => {
            taskController.removeTaskById(data.detail.id)
                .then(() => {
                    alertView.hide();
                })
                .catch((error) => {
                    alertView.error(error);
                    console.log(`deleting task with id: "${data.detail.id}" failed`);
                });
        });

        formView.rootEl = this.rootEl.querySelector('.container__form');
        formView.init();
        formView.render();
        formView.rootEl.addEventListener('onTaskSubmit', (data) => {
            taskController.createTask(data.detail.task)
                .then(() => {
                    alertView.hide();
                    formView.render();
                })
                .catch((error) => {
                    alertView.error(error);
                    console.error(error);
                });
        });

        taskController.getTasks()
            .then(() => {
                alertView.hide();
                taskCollectionView.render();
            })
            .catch((error) => {
                alertView.error(error);
                console.error(error);
            });
    }
}

export default ContainerView;

