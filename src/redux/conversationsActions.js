export const SET_CONVERSATIONS = "SET_CONVERSATIONS";
export const DELETE_CONVERSATION = "DELETE_CONVERSATION";
export const SET_NEW_CATEGORY = "SET_NEW_CATEGORY";
export const SET_NEW_NAME = "SET_NEW_NAME";
export const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
export const ADD_NEW_CONVERSATION = "ADD_NEW_CONVERSATION";
export const SET_SELECTED_CONVERSATION_ID = "SET_SELECTED_CONVERSATION_ID";

export const setConversations = (conversations) => (dispatch) => {
  dispatch({
    type: SET_CONVERSATIONS,
    payload: conversations,
  });
};

export const addNewConversation = (id, name, category) => (dispatch) => {
  dispatch({
    type: ADD_NEW_CONVERSATION,
    payload: { id, name, category, conversation: [] },
  });
};
export const setSelectedConversations = (conversationId) => (dispatch) => {
  dispatch({
    type: SET_SELECTED_CONVERSATION_ID,
    payload: conversationId,
  });
};
export const deleteConversation = (conversationId) => (dispatch) => {
  dispatch({
    type: DELETE_CONVERSATION,
    payload: conversationId,
  });
};

export const setCategory = (category) => (dispatch) => {
  dispatch({
    type: SET_NEW_CATEGORY,
    payload: category,
  });
};

export const setName = (name) => (dispatch) => {
  dispatch({
    type: SET_NEW_NAME,
    payload: name,
  });
};

export const addMessage = (messageText, meSend) => (dispatch) => {
  dispatch({
    type: ADD_NEW_MESSAGE,
    payload: { messageText, meSend },
  });
};
