const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:{ 
            let body = state.newMessageBody;          
            return {
                ...state,
                messages: [...state.messages, {id:15, message: body}],
                newMessageBody: ''
            };
        }
        default:
            return state;
    }
};

export const sendMessagetCreator = () => ({
    type: SEND_MESSAGE
});
export const updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
});

export default dialogsReducer;