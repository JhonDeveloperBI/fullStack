import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/users';


const get =() => {
        return axios.get(USERS_REST_API_URL);
};

const userApi = {
        get
};

export default userApi;

