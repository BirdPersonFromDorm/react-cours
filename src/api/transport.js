import axios from 'axios';

let transport;


export const configureTransport = (token = null) => {

    const options =  token  ?
        {
            baseURL: process.env.REACT_APP_API_URL,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        : { baseURL: process.env.REACT_APP_API_URL };

    transport = axios.create(options);
    return transport;
};

export const getTransport = () => transport || configureTransport();
