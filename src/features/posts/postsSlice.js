import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = [
    {id: 1, user: 'Abbas Salah', content: 'This is description', img: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
    {id: 2, user: 'Abbas Salah', content: 'This is description', img: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
    {id: 3, user: 'Abbas Salah', content: 'This is description', img: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
    {id: 4, user: 'Abbas Salah', content: 'This is description', img: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        createPost: {
            reducer(state, action){
                state.unshift(action.payload)
            },
            prepare(user, content, img){
                return {
                    payload: {
                        user,
                        content,
                        img,
                        id: nanoid()
                    }
                }
            }
        }
    }
})

export const allPosts = state => state.posts;

export const { createPost } = postsSlice.actions;

export default postsSlice.reducer;