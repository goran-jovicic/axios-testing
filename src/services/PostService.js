import axios from 'axios'

export default class PostService {
    constructor() {
        axios.defaults.baseURL = `http://jsonplaceholder.typicode.com/`
    }

    getUsers() {
        return axios.get(`users`)
    }

    getPosts() {
        // const response = await axios.get(`posts`)
        // console.log(response)
        return axios.get('posts')
    }
}

export const postService = new PostService() 
