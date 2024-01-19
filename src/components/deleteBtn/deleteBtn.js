import './deleteBtn.scss';
export const createBtn = ({
    label,
    onClick,
    icon,
    backgroundColor,
}) => {
    const btn = document.createElement('button');
    btn.type = 'a';
    btn.addEventListener('click', onClick);
    btn.className = 'container__elementDeleteBtn';

    if (backgroundColor) {
        btn.style.backgroundColor = backgroundColor;
    }

    if (label) {
        btn.innerText = label;
    }

    if (icon) {
        const img = document.createElement('img');
        img.src = icon;
        btn.appendChild(img);
    }

    return btn;
};
