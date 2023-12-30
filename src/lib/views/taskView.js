import AbstractView from '../Abstracts/view';

class TaskView extends AbstractView {
    constructor(model, taskCollectionController) {
        super(model);
        this.taskCollectionController = taskCollectionController;
        this._deleteBtn = '';
        this._deleteClickHandler = this.deleteClickHandler.bind(this); // Bind the handler to the instance
    }

    createListElement() {
        const taskElement = document.createElement('li');
        taskElement.className = 'container__listElement';
        taskElement.innerHTML =
            `${this.model.properties.task}`;
        this._rootEl = taskElement;
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
        // to handle deleting of an object i need to pass it to the parent view object to use method 'delete'
        this.taskCollectionController.deleteListElement(this.model.properties.index);
        this.removeEventListener();
    }

    update() {
        this.render();
    }

    render() {
        this.createListElement();
        this.setUpDeleteBtn();
        this.setEventListener();
        this._rootEl.appendChild(this._deleteBtn);
        return this._rootEl;
    }
}

export default TaskView;
