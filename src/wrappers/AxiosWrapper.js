import axios from 'axios';

const AxiosWrapper = {
    request(method, url, data) {
        const headers = {
            session: sessionStorage.id,
            local: localStorage.id,
        };
        return axios({
            method: method,
            url: url,
            data: data,
            headers: headers,
            json: true,
            
        })
        .then(response => response, (error => error));
    },
};

export default AxiosWrapper;