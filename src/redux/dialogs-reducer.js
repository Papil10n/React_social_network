const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_MESSAGE: {

            let newMessage = state.newMessageText;

            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, {id: 6, from: "me", message: newMessage}],
            };
        }

        case UPDATE_NEW_MESSAGE_TEXT: {

            return {...state, newMessageText: action.newMessage};
        }

        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message});
export default dialogsReducer;