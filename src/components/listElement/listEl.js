import './listEl.scss';
import {createBtn} from '../deleteBtn/deleteBtn';
import {deleteButton} from '../deleteBtn/deleteBtn.stories';

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
