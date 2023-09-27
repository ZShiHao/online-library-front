import client from '../utils/client';

const getBooksPage = (params:any) => {
    return client.get('/api/books', {
        params,
    });
};

const getBookDetail = (id:string) => {
    return client.get('/api/books/'+id);
};

const getBookDownloadURL = (id:string) => {
    return client.get('/api/books/download/'+id);
};

export {
    getBookDetail,
    getBooksPage,
    getBookDownloadURL
}
