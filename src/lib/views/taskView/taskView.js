import AbstractView from '../../Abstracts/view';
import BtnView from '../btnView/btnView';
import './taskView.scss';

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
        this.rootEl = taskElement;
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
        const btn = new BtnView();
        btn.render({mode: 'delete'});
        this.deleteBtn = btn.rootEl;
        this._setEventListener();
        this.rootEl.appendChild(this.deleteBtn);
    }
}

export default TaskView;
