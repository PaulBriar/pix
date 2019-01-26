import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4b4649ff15e86db330455968864591ab879ab871cbe0241ead2e176cee1bca7e'
    }
});