import axios from 'axios';

import {
    AT_POSTS
} from './action-types';

const END_POINT = "http://localhost:3100";

export const readAllPosts = () => {
    return function (dispatch) {
        axios.get(`${END_POINT}/posts`)
            .then((res) => {
                dispatch({
                    type: AT_POSTS.READ_ALL,
                    payload: res.data
                })
            })   
    }
}

export const readPost = (id) => {
    return function (dispatch) {
        axios.get(`${END_POINT}/post/${id}`)
            .then((res) => {
                dispatch({
                    type: AT_POSTS.READ,
                    payload: res.data
                })
            })      
    }
}

export const deletePost = (id) => {
    return function (dispatch) {
        axios.delete(`${END_POINT}/post/${id}`)
            .then((res) => {
                dispatch({
                    type: AT_POSTS.DELETE,
                    payload: id
                })
            })

    }
}

export const createPost = (post) => {
    return function (dispatch) {
        axios.post(`${END_POINT}/post/`,
        {
            title: post.title,
            content: post.content,
            author: post.axios
        })
            .then((res) => {
                dispatch({
                    type: AT_POSTS.CREATE,
                    payload: res.data
                })
            })
    }
}