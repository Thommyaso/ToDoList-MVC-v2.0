import AbstractView from '../Abstracts/view';

class TaskView extends AbstractView {
    constructor(model, taskCollectionController) {
        super(model);
        this.taskCollectionController = taskCollectionController;
        this._deleteBtn = '';
        this._deleteClickHandler = this.deleteClickHandler.bind(this);
    }

    createListElement() {
        const taskElement = document.createElement('li');
        taskElement.className = 'container__listElement';
        taskElement.innerHTML =
            `${this.model.get('task')}`;
        this.rootEl = taskElement;
    }

    setUpDeleteBtn() {
        const deleteBtn = document.createElement('a');
        deleteBtn.className = 'container__elementDeleteBtn';
        deleteBtn.textContent = 'Delete';
        this._deleteBtn = deleteBtn;
    }

    setEventListener() {
        this._deleteBtn.addEventListener('click', this._deleteClickHandler);
    }

    removeEventListener() {
        this._deleteBtn.removeEventListener('click', this._deleteClickHandler);
    }

    deleteClickHandler() {
        this.removeEventListener();
        this.taskCollectionController.deleteListElement(this.model.get('id'));
    }

    render() {
        this.createListElement();
        this.setUpDeleteBtn();
        this.setEventListener();
        this.rootEl.appendChild(this._deleteBtn);
    }
}

export default TaskView;
