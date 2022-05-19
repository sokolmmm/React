const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Barsik" },
    { id: 2, name: "Murchik" },
    { id: 3, name: "Murchik" },
    { id: 4, name: "Murchik" },
    { id: 5, name: "Murchik" },
  ],
  messages: [
    { id: 1, message: "How are you" },
    { id: 2, message: "Privet are you" },
    { id: 3, message: "Hello are you" },
    { id: 4, message: "Hi are you" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 15, message: body }],
      };
    }
    default:
      return state;
  }
};

export const sendMessagetCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
