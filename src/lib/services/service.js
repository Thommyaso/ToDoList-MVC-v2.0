import axios from 'axios';

class Service {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getUser(path) {
        try {
            return await axios.get(`${this.baseUrl}${path}`);
        } catch (error) {
            console.error(error);
        }
    }

    async postUser(path, task) {
        try {
            const requestBody = {
                method: 'post',
                url: `${this.baseUrl}${path}`,
                data: {
                    task: task,
                },
            };

            const response = await axios(requestBody);

            return await response.data.createdTask;
        } catch (error) {
            console.error(error);
        }
    }

    async deleteUser(id) {
        try {
            const requestBody = {
                method: 'delete',
                url: `${this.baseUrl}task/${id}`,
            };

            return await axios(requestBody);
        } catch (error) {
            console.error(error);
        }
    }
}

export default Service;
