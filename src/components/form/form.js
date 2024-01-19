import './form.scss';

export const createForm = ({
    children,
    color,
    backgroundColor,
    height,
    width,
}) => {

    const form = document.createElement('form');
    form.className = 'container__form';

    children.forEach((child) => {
        form.appendChild(child);
    });

    if (height) {
        form.style.height = height;
    }

    if (width) {
        form.style.width = width;
    }

    if (backgroundColor) {
        form.style.backgroundColor = backgroundColor;
    }

    if (color) {
        form.style.color = color;
    }
    return form;
};
