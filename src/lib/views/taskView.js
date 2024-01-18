import AbstractView from '../Abstracts/view';

class TaskView extends AbstractView {
    constructor(model) {
        super(model);
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
        const task = {id: this.model.get('id')};
        const customEvent = new CustomEvent('onTaskDelete', {detail: task});

        this.rootEl.dispatchEvent(customEvent);
    }

    render() {
        this.createListElement();
        this.setUpDeleteBtn();
        this.setEventListener();
        this.rootEl.appendChild(this._deleteBtn);
    }
}

export default TaskView;
