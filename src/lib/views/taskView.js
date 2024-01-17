import AbstractView from '../Abstracts/view';

class TaskView extends AbstractView {
    constructor(model, taskController) {
        super(model);
        this.taskController = taskController;
        this._deleteBtn = '';
        this.customEvent = new Event('onButtonClicked');
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
        this.rootEl.dispatchEvent(this.customEvent);
        const id = this.model.get('id');
        this.taskController.removeTaskById(id)
            .then(() => {
                this.removeEventListener();
            })
            .catch(() => {
                console.log(`deleteng task with id: "${id}" failed`);
            });
    }

    render() {
        this.createListElement();
        this.setUpDeleteBtn();
        this.setEventListener();
        this.rootEl.appendChild(this._deleteBtn);
    }
}

export default TaskView;
