import './toDoList.scss';

export const createToDoList = ({
    children,
    backgroundColor,
}) => {
    const toDoList = document.createElement('div');
    toDoList.className = 'container';
    children.forEach((child) => {
        toDoList.appendChild(child);
    });

    if (backgroundColor) {
        toDoList.style.backgroundColor = backgroundColor;
    }

    return toDoList;
};
