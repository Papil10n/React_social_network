import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 3, message: 'Hi, how are you?', likeCount: 12},
                {id: 2, message: 'It\'s my first post', likeCount: 10},
                {id: 1, message: 'test проброса пропсов', likeCount: 5},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, from: "me", message: 'Hi'},
                {id: 2, from: "mate", message: 'What`s up!?'},
                {id: 3, from: "me", message: 'Na bad, u?'},
                {id: 4, from: "mate", message: 'Nikkeee'},
                {id: 5, from: "mate", message: 'Where are you?'},
            ],
            dialogs: [
                {
                    id: 1,
                    name: 'Dimych',
                    img: "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                },
                {
                    id: 2,
                    name: 'Andrew',
                    img: "https://www.mediastorehouse.com/p/629/digital-illustration-gangster-smoking-cigar-13543859.jpg.webp"
                },
                {
                    id: 3,
                    name: 'Sveta',
                    img: "https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"
                },
                {
                    id: 4,
                    name: 'Sasha',
                    img: "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg"
                },
                {
                    id: 5,
                    name: 'Viktor',
                    img: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"
                },
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Dimych',
                    img: "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                },
                {
                    id: 2,
                    name: 'Andrew',
                    img: "https://www.mediastorehouse.com/p/629/digital-illustration-gangster-smoking-cigar-13543859.jpg.webp"
                },
                {
                    id: 3,
                    name: 'Sveta',
                    img: "https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"
                },
            ]
        }
    },
    _callSubscriber() {
        console.log("state changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this.callSubscriber(this._state);
    }
}

export default store;

window.store = store;
