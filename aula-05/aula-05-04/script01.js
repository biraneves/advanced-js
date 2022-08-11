// Axios
import getPosts from './services/postsApi.js';

// let res = await axios.get("https://jsonplaceholder.typicode.com/users");
// console.log(res.data);

// let id = 1;
let res = await getPosts();
console.log(res);