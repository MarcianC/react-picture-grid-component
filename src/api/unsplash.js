import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 838e091a0d9818a1f0ca8fad67ac7e1425eff40824431aa08c1a117c4b6f23d7',
    }
});