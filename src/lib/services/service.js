import axios from 'axios';

class Service {
    constructor() {
        this.baseUrl = 'http://localhost:3000/task/';
    }

    async getTasks() {
        return await axios.get(this.baseUrl);
    }

    async postTask(task) {
        return await axios.post(this.baseUrl, {task});
    }

    async deleteTask(id) {
        return await axios.delete(`${this.baseUrl}${id}`);
    }
}

export default Service;
