const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 3, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'It\'s my first post', likeCount: 10},
        {id: 1, message: 'test проброса пропсов', likeCount: 5},
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {

            return {
                ...state,
                posts: [{id: 4, message: state.newPostText, likeCount: 0,}, ...state.posts],
                newPostText: ''
            }

        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText};
        }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;