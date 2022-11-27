import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.post(url);
export const createPost = (newPost) => axios.post(url, newPost);