import AbstractView from '../../Abstracts/view';
import './btnView.scss';

class BtnView extends AbstractView {
    constructor() {
        super();
        this.rootEl = document.createElement('button');
    }

    render(options) {
        const {mode} = options;
        this.rootEl.classList.add('btn');
        if (mode === 'delete') {
            this.rootEl.classList.add('btn--delete');
        } else if (mode === 'add') {
            this.rootEl.classList.add('btn--add');
        }
    }
}

export default BtnView;
