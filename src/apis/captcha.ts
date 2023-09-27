import client from '../utils/client';

const getCaptcha = () => {
    return client.get('/api/books/captcha');
};

export {
    getCaptcha
}

