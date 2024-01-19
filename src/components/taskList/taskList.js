import './taskList.scss';

export const createTaskLIst = ({
    children,
}) => {
    const taskList = document.createElement('ul');
    taskList.className = 'container__list';
    children.forEach((child) => {
        taskList.appendChild(child);
    });
    return taskList;
};
