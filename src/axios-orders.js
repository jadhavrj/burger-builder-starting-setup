import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5cf28-default-rtdb.firebaseio.com/'
});

export default instance;