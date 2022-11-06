import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/Validators/validator";
import {Textarea} from "../../common/Forms/Forms";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id}
                                                   likeCount={p.likeCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3 className={s.title}>My Posts</h3>

            <AddNewPostFormRedux onSubmit={onAddPost}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textareaBlock}>
                <Field name="newPostText" component={Textarea} placeholder="Post message"
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;