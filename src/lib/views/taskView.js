import AbstractView from '../Abstracts/view';

class TaskView extends AbstractView {
    constructor(model) {
        super(model);
        this._deleteBtn = null;
    }

    get deleteBtn() {
        return this._deleteBtn;
    }

    set deleteBtn(btn) {
        this._deleteBtn = btn;
    }

    _createElementContainer(text) {
        const div = document.createElement('div');
        const p = document.createElement('p');
        div.className = 'container__elementContainer';
        p.className = 'container__elementParagraph';
        p.innerHTML = text;
        div.appendChild(p);
        return div;
    }

    _createListElement() {
        const taskElement = document.createElement('li');
        taskElement.className = 'container__listElement';
        taskElement.appendChild(this._createElementContainer(this.model.get('task')));
        // taskElement.innerHTML =
        //     `${this.model.get('task')}`;
        this.rootEl = taskElement;
    }

    _setUpDeleteBtn() {
        const deleteBtn = document.createElement('a');
        deleteBtn.className = 'container__elementDeleteBtn';
        deleteBtn.textContent = 'Delete';
        this.deleteBtn = deleteBtn;
    }

    _setEventListener() {
        this.deleteBtn.addEventListener('click', this._deleteClickHandler.bind(this));
    }

    _deleteClickHandler() {
        const task = {id: this.model.get('id')};
        const customEvent = new CustomEvent('onTaskDelete', {detail: task});

        this.rootEl.dispatchEvent(customEvent);
    }

    render() {
        this._createListElement();
        this._setUpDeleteBtn();
        this._setEventListener();
        this.rootEl.appendChild(this.deleteBtn);
    }
}

export default TaskView;
