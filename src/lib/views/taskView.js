import AbstractView from '../Abstracts/view';

class TaskView extends AbstractView {
    constructor(model) {
        super(model);
        this._deleteBtn = '';
        this.clickHandler = this.clickHandler.bind(this); // Bind the handler to the instance
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
        console.log(this._deleteBtn);
        this.setEventListener();
    }

    setEventListener() {
        this._deleteBtn.addEventListener('click', this.clickHandler);
    }

    removeEventListener() {
        this._deleteBtn.removeEventListener('click', this.clickHandler);
    }

    clickHandler() {
        // this.controller.handleDeleteClick();  <-- time to set up controller for task View
        console.log('clicked');
        this.removeEventListener();
    }

    render() {
        // console.log(this.controller); < -- controller not present atm
        return this.createListElement();
    }
}

export default TaskView;
