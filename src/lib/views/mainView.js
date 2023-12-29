/* import AbstractView from '../Abstracts/view';

class MainView extends AbstractView {
    constructor(model, controller) {
        super(model, controller);

        this.deleteBtns = [];
        this.listContainer = document.querySelector('.container__list');
        this.textareaBtn = document.querySelector('#textareaBtn');
        this.textarea = document.querySelector('#textarea');
    }

    removeDeleteBtns() {
        // remove listeners before removing buttons
        this.deleteBtns.forEach((btn, index) => {
            btn.removeEventListener('click', () => {
                this.controller.handleDeleteClick(index);
            });
        });
        this.deleteBtns = [];
    }

    setDeleteBtns() {
        // cleans old buttons and their event listeners to prevent memory leaks
        this.removeDeleteBtns();
        // sets up array of new deleteButtons to assign event listeners
        this.deleteBtns = document.querySelectorAll('.container__elementDeleteBtn');
    }

    setUpDeleteListener() {
        this.setDeleteBtns();
        this.deleteBtns.forEach((element, index) => {
            element.addEventListener('click', () => {
                this.controller.handleDeleteClick(index);
            });
        });
    }

    createListElement(innerText) {
        const taskElement = document.createElement('li');
        taskElement.className = 'container__listElement';
        taskElement.innerHTML =
            `${innerText}<a class="container__elementDeleteBtn">Delete</a>`;

        return taskElement;
    }

    render(tasks) {
        this.listContainer.innerHTML = '';
        tasks.forEach((innerText) => {
            const taskElement = this.createListElement(innerText);
            this.listContainer.appendChild(taskElement);
        });
        this.setUpDeleteListener();
    }

    setTextareaListener() {
        this.textareaBtn.addEventListener('click', () => {
            const newTask = this.textarea.value;
            return this.controller.addTask(newTask);
        });
    }

    update(data) {
        this.render(data);
    }
}

export default MainView;
 */
