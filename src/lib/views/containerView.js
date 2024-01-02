import AbstractView from '../Abstracts/view';

class ContainerView extends AbstractView {
    constructor(model) {
        super(model);
    }

    render() {
        this.controller.setListObjects();
        this.controller.setFormObjects();
        const taskCollectionView = this.model.get('list').taskCollectionView;
        const formView = this.model.get('form').formView;

        taskCollectionView.rootEl = this.rootEl.querySelector('.container__list');

        formView.rootEl = this.rootEl.querySelector('.container__form');
        formView.render();
    }
}

export default ContainerView;

