import AbstractView from '../Abstracts/view';

class TaskView extends AbstractView {
    constructor(model) {
        super(model);
        this._deleteBtn = '';
        this.deleteClickHandler = this.deleteClickHandler.bind(this); // Bind the handler to the instance
    }

    createListElement() {
        const taskElement = document.createElement('li');
        taskElement.className = 'container__listElement';
        taskElement.innerHTML =
            `${this.model.properties.task}`;
        this._rootEl = taskElement;
        this.setUpDeleteBtn();
        return taskElement;
    }

    setUpDeleteBtn() {
        const deleteBtn = document.createElement('a');
        deleteBtn.className = 'container__elementDeleteBtn';
        deleteBtn.textContent = 'Delete';
        this._deleteBtn = deleteBtn;
        this._rootEl.appendChild(deleteBtn);
        this.setEventListener();
    }

    setEventListener() {
        this._deleteBtn.addEventListener('click', this.deleteClickHandler);
    }

    removeEventListener() {
        this._deleteBtn.removeEventListener('click', this.deleteClickHandler);
    }

    deleteClickHandler() {
        console.log('clicked');
        this.removeEventListener();
    }

    update(/* data */) {
        this.render();
    }

    render() {
        return this.createListElement();
    }
}

export default TaskView;
