import axios from 'axios';

class Service {
    constructor() {
        this.baseUrl = 'http://localhost:3000/task/';
    }

    async getTasks() {
        return await axios.get(this.baseUrl);
    }

    async postTask(task) {
        const requestBody = {
            method: 'post',
            url: this.baseUrl,
            data: {
                task: task,
            },
        };
        return await axios(requestBody);
    }

    async deleteTask(id) {
        const requestBody = {
            method: 'delete',
            url: `${this.baseUrl}${id}`,
        };
        return await axios(requestBody);
    }
}

export default Service;
