import AbstractView from '../Abstracts/view';

class ContainerView extends AbstractView {
    constructor(model) {
        super(model);
    }

    initialize(rootEl, controller) {
        this.rootEl = document.querySelector(`#${rootEl}`);
        this.controller = controller;
        this.li = document.querySelector(`#${rootEl}__list`);
        this.form = document.querySelector(`#${rootEl}__form`);
    }

    /*     setCollectionObjects() {
        this.controller.setListObjects(this.li);
    }

    setFormObjects() {
        this.controller.setFormObjects(this.form);
    } */

    setObjects() {
        this.controller.setListObjects(this.li);
        this.controller.setFormObjects(this.form);
    }

    render() {
        this.controller.setListObjects(this.li);
        this.controller.setFormObjects(this.form);
        this.controller.exampleTasks();
    }

}

export default ContainerView;


/* const containerView = new ContainerView();


containerView.rootEl = document.querySelector('#listContainer01');

containerView.initialize(container, controller);
controller.setCollectionObjects(containerView.li); */

