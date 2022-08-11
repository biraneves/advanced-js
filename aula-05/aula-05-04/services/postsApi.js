import axios from 'axios';

const postsApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

async function getPosts() {
    let res = await postsApi.get("posts");
    return res.data;
}

export default getPosts;