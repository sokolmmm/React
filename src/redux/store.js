import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you", likesCount: 10},
                {id: 2, message: "Hi, how are you", likesCount: 30},
                {id: 3, message: "Hi, how are you", likesCount: 20},
            ],
            newPostText: "",
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Barsik"},
                {id: 2, name: "Murchik"},
                {id: 3, name: "Murchik"},
                {id: 4, name: "Murchik"},
                {id: 5, name: "Murchik"},
            ],
            messages: [
                {id: 1, message: "How are you"},
                {id: 2, message: "Privet are you"},
                {id: 3, message: "Hello are you"},
                {id: 4, message: "Hi are you"},
            ],
            newMessageBody:"",
        },
    },
    _callSubscriber () {},
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; 
    },
    dispatch (action) {
        this._state.profilePage = profileReducer (this._state.profilePage, action); 
        this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action); 
        this._callSubscriber(this._state);
    },
};

export default store;