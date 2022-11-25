import axios from 'axios';

const url = 'https://http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);