import AbstractView from '../Abstracts/view';
import FormView from '../views/formView';
import TaskCollectionView from '../views/taskCollectionView';
import TaskController from '../controllers/taskController';

class ContainerView extends AbstractView {
    constructor(model) {
        super(model);

        this.messageEl = null;
    }

    decision(data) {
        if (!(data.detail.status)) {
            console.log(data);
            this.messageEl.innerHTML = data.detail.message;
            this.messageEl.classList.add(data.detail.class);
            return;
        }
        this.messageEl.classList = '';
        this.messageEl.classList.add('container__alert');
    }

    async render() {
        const taskController = new TaskController(this.model);
        const taskCollectionView = new TaskCollectionView(this.model);
        const formView = new FormView(this.model);

        taskCollectionView.controller = taskController;
        taskCollectionView.rootEl = this.rootEl.querySelector('.container__list');
        taskCollectionView.rootEl.addEventListener('onLiElBtnClicked', (data) => this.decision(data));

        this.messageEl = this.rootEl.querySelector('.container__alert');

        formView.controller = taskController;
        formView.rootEl = this.rootEl.querySelector('.container__form');
        formView.init();
        formView.rootEl.addEventListener('onValidation', (data) => this.decision(data));
        formView.render();

        this.messageEl.innerHTML = 'loading';
        this.messageEl.classList.add('container__alert-infoActive');
        taskController.getTasks()
            .then(() => {
                taskCollectionView.render();
                this.messageEl.classList.remove('container__alert-infoActive');
            })
            .catch((error) => {
                this.messageEl.innerHTML = 'there was a problem during downloading task list';
                this.messageEl.classList.add('container__alert-active');
                console.error(error);
            });
    }
}

export default ContainerView;

