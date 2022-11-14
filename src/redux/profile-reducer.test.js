import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'test проброса пропсов', likeCount: 5},
        {id: 2, message: 'It\'s my first post', likeCount: 10},
        {id: 3, message: 'Hi, how are you?', likeCount: 12},
    ],
}

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("test add post");

    // 2 . action
    let newState = profileReducer(state, action);

    //  3. expectation
    expect(newState.posts.length).toBe(4);
});

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("test add post");

    // 2 . action
    let newState = profileReducer(state, action);

    //  3. expectation
    expect(newState.posts[3].message).toBe("test add post");
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2 . action
    let newState = profileReducer(state, action);

    //  3. expectation
    expect(newState.posts.length).toBe(2);
});

it('after deleting length shouldn`t be decremented if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000);

    // 2 . action
    let newState = profileReducer(state, action);

    //  3. expectation
    expect(newState.posts.length).toBe(3);
});