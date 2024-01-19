import './textarea.scss';

export const createTextarea = ({
    color,
    backgroundColor,
    height,
    width,
}) => {
    const textarea = document.createElement('textarea');
    textarea.className = 'container__textarea';

    if (height) {
        textarea.style.height = height;
    }

    if (width) {
        textarea.style.width = width;
    }

    if (backgroundColor) {
        textarea.style.backgroundColor = backgroundColor;
    }

    if (color) {
        textarea.style.color = color;
    }

    return textarea;
};
