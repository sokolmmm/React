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
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let newMessageData = {
                id: 15,
                message: state.newMessageBody
            };
            state.messages.push(newMessageData);
            state.newMessageBody = "";
            return state;
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