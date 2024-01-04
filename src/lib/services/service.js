import axios from 'axios';

class Service {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getTasks() {
        try {
            const response = await axios.get(this.baseUrl);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async postTask(task) {
        try {
            const requestBody = {
                method: 'post',
                url: this.baseUrl,
                data: {
                    task: task,
                },
            };
            const value = await axios(requestBody);
            return value.data.createdTask;
        } catch (error) {
            console.error(error);
        }
    }

    async deleteTask(id) {
        try {
            const requestBody = {
                method: 'delete',
                url: `${this.baseUrl}${id}`,
            };
            const response = await axios(requestBody);
            return response.data.tasks;
        } catch (error) {
            console.error(error);
        }
    }
}

export default Service;
