import client from '../utils/client';

const getTags = (params:any) => {
    return client.get('/api/tags', {
        params,
    });
};

export {
    getTags
}
