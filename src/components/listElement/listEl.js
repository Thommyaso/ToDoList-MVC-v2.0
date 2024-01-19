import './listEl.scss';
import {createBtn} from '../buttons/Btn';
import {deleteButton} from '../buttons/Btn.stories';

export const createLiEl = ({
    innerHTML,
    color,
    backgroundColor,
}) => {
    const liEl = document.createElement('li');
    liEl.innerHTML = innerHTML;
    liEl.appendChild(createBtn(deleteButton.args));
    liEl.className = 'container__listElement';

    if (color) {
        liEl.style.color = color;
    }

    if (backgroundColor) {
        liEl.style.backgroundColor = backgroundColor;
    }

    return liEl;
};
