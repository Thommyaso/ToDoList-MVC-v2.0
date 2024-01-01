import AbstractView from '../Abstracts/view';

class ContainerView extends AbstractView {
    constructor(model) {
        super(model);
    }

    render() {
        this.controller.setListObjects();
        this.controller.setFormObjects();

        const taskCollectionView = this.model.properties.list.collectionView;
        const formView = this.model.properties.form.formView;

        taskCollectionView.rootEl = this.rootEl.querySelector('.container__list');

        formView.rootEl = this.rootEl.querySelector('.container__form');
        formView.render();

        this.controller.exampleTasks();
    }
}

export default ContainerView;

