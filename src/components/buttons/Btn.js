import './Btn.scss';
export const createBtn = ({
    label,
    cssClass,
    onClick,
    icon,
    backgroundColor,
}) => {
    const btn = document.createElement('button');
    btn.type = 'button ';
    btn.addEventListener('click', onClick);
    btn.className = cssClass;

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
