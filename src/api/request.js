import {getTransport, configureTransport} from './transport';

export const get = (path, config) => getTransport()
    .get(`/${path}`, config).then((response) => response.data);

export const post = async (path, payload, config) => getTransport()
    .post(`/${path}`, payload, config)
    .then((response) => response.data);

export const put = (path, payload = {}) => getTransport()
    .put(`/${path}`, payload)
    .then((response) => response.data);

export const deleteRequest = (path, payload = {}) => getTransport()
    .delete(`/${path}`, payload)
    .then((response) => response.data);

export const patch = (path, payload = {}) => getTransport()
    .patch(`/${path}`, payload)
    .then((response) => response.data);

export const httpDelete = (path, config) => getTransport()
    .delete(`/${path}`, config)
    .then((response) => response.data);
