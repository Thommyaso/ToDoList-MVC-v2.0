import AbstractView from '../Abstracts/view';

class TaskView extends AbstractView {
    constructor(model, taskController) {
        super(model);
        this.taskController = taskController;
        this._deleteBtn = '';
        /* this.data = {message: 'asdgfadhgfga'};
        this.customEvent = new CustomEvent('onButtonClicked', {detail: this.data}); */
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
        const data = {class: 'container__alert-active'};
        const customEvent = new CustomEvent('onButtonClicked', {detail: data});

        const id = this.model.get('id');
        this.taskController.removeTaskById(id)
            .then(() => {
                data.status = true;
                this.rootEl.dispatchEvent(customEvent);
                this.removeEventListener();
            })
            .catch(() => {

                data.status = false;
                data. message = 'deleting task failed';

                this.rootEl.dispatchEvent(customEvent);
                console.log(`deleting task with id: "${id}" failed`);
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
