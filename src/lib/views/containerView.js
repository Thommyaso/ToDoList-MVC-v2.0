import AbstractView from '../Abstracts/view';
import FormView from '../views/formView';
import TaskCollectionView from '../views/taskCollectionView';
import TaskController from '../controllers/taskController';
import AlertView from './alertView';

class ContainerView extends AbstractView {
    constructor(model) {
        super(model);

        this.alertView = new AlertView();
    }

    _handleError(error) {
        this.alertView.error(error);
        console.error(error);
        return this;
    }

    _hideAlert() {
        this.alertView.hide();
        return this;
    }

    async render() {
        const taskController = new TaskController(this.model);
        const taskCollectionView = new TaskCollectionView(this.model);
        const formView = new FormView(this.model);

        this.alertView.render();
        this.rootEl.prepend(this.alertView.rootEl);
        this.alertView.info('loading');

        taskCollectionView.rootEl = this.rootEl.querySelector('.container__list');

        formView.rootEl = this.rootEl.querySelector('.container__form');
        formView.init();
        formView.render();

        taskController.getTasks()
            .then(this._hideAlert.bind(this))
            .then(taskCollectionView.render.bind(taskCollectionView))
            .catch(this._handleError.bind(this));

        const onTaskDeleteHandler = (data) => {
            taskController.removeTaskById(data.detail.id)
                .then(this._hideAlert.bind(this))
                .catch(this._handleError.bind(this));
        };

        const onTaskSubmintHandler = (data) => {
            taskController.createTask(data.detail.task)
                .then(this._hideAlert.bind(this))
                .then(formView.render.bind(formView))
                .catch(this._handleError.bind(this));
        };

        taskCollectionView.rootEl.addEventListener('onTaskDelete', onTaskDeleteHandler);
        formView.rootEl.addEventListener('onTaskSubmit', onTaskSubmintHandler);

    }
}

export default ContainerView;

