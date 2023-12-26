import './style.scss';
import MainController from './lib/controllers/mainController';
import MainModel from './lib/models/mainModel';

document.addEventListener('DOMContentLoaded', () => {
    const model = new MainModel();
    const controller = new MainController(model);
    controller.initialize();
});
