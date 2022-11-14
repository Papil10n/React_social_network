import React from "react";
import ReactDOM from "react-dom";
import profileReducer, {addPostActionCreator} from "./profile-reducer";

it('length of posts should be incremented', () => {
    let action = addPostActionCreator("test add post");
    let state = {
        posts: [
            {id: 1, message: 'test проброса пропсов', likeCount: 5},
            {id: 2, message: 'It\'s my first post', likeCount: 10},
            {id: 3, message: 'Hi, how are you?', likeCount: 12},
        ],
    }

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});