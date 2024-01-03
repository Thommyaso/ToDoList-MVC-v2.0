// eslint-disable-next-line no-unused-vars
import axios, {isCancel, AxiosError} from 'axios';

class Service {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getUser(path) {
        try {
            const response = await axios.get(`${this.baseUrl}${path}`);
            console.log(response);
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
}

export default Service;
