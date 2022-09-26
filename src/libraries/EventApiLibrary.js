import AxiosWrapper from '@/wrappers/AxiosWrapper';

const DigestemApiLibrary = {
    // RODRIGO_SERVICE: process.env.VUE_APP_RODRIGO_SERVICE,
    RODRIGO_SERVICE: 'http://localhost:9090/',
    EVENT_SERVICE: 'event-service',
    async postEvent(form) {
        const method = 'post';
        const url = `${this.RODRIGO_SERVICE}${this.EVENT_SERVICE}/event`;
        return AxiosWrapper.request(method, url, form)
        .then((response) => {
            return response;
        }, (error) => {
            throw error;
        });
    },
    async postSession(duration, width, height) {
        const method = 'post';
        const form = {
            duration: duration,
            width: width,
            height: height,
        };
        const url = `${this.RODRIGO_SERVICE}${this.EVENT_SERVICE}/session`;
        return AxiosWrapper.request(method, url, form)
        .then((response) => {
            return response;
        }, (error) => {
            throw error;
        });
    },
};

export default DigestemApiLibrary;
