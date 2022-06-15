import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = [
    {id: 1, user: 'Abbas Salah', content: 'The Scream By Edvard Munch', img: 'https://www.1st-art-gallery.com/thumbnail/168000/168895/painting_page_800x/Munch/The-Scream.jpg'},
    {id: 2, user: 'Abbas Salah', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', img: 'https://dthezntil550i.cloudfront.net/3e/latest/3e2012220133466930011173110/1280_960/c4da9ec5-c334-4668-8093-68ea5836f798.jpg'},
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
        },
        deletePost: (state, action) => {
              return state.filter((post)=> post.id !== action.payload.id)
        },
        updatePost: (state, action) => {
            state.map((post)=>{
                if (post.id == action.payload.id){
                   post.user = action.payload.user
                   post.content = action.payload.content
                   post.img = action.payload.img
                }
            })
        }
    }
})

export const allPosts = state => state.posts;

export const { createPost, deletePost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;