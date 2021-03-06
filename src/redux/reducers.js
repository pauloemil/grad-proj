import {
  SET_NEW_CATEGORY,
  SET_NEW_NAME,
  ADD_NEW_MESSAGE,
  SET_CONVERSATIONS,
  SET_MESSAGES,
  ADD_NEW_CONVERSATION,
  DELETE_CONVERSATION,
  SET_SELECTED_CONVERSATION_ID,
} from "./actions/conversationsActions";
import { SET_OTP, SET_EMAIL } from "./actions/resetActions";
import { SET_USER } from "./actions/userActions";
import uuid from "react-native-uuid";
const conversationsInitialState = {
  conversations: [
    {
      id: 1,
      category: "Arts & Entertainments",
      name: "Going to cenima (Start)",
      lastMessage: "Thanks for the help",
      date: "Yesterday",
      conversation: [
        {
          id: 1,
          messageText: "newthis is somethin",
          meSend: false,
        },
        {
          id: 2,
          messageText: "this is somthing, باولو اميل حياك الله ياخويا",
          meSend: true,
        },
        {
          id: 3,
          messageText: "this is something! something! something!",
          meSend: false,
        },
        {
          id: 4,
          messageText:
            "this is something!this is something! thing!this is something!",
          meSend: true,
        },
      ],
    },
    {
      id: 2,
      category: "Arts & Entertainments",
      name: "Going to cenima",
      lastMessage: "Thanks for the help",
      date: "Yesterday",
      conversation: [],
    },
    {
      id: 3,
      category: "Traviling",
      name: "Traviling to Asia (Ending)",
      lastMessage: "Bye bye mate, it was nice to see you",
      date: "26/3/2022",
      conversation: [],
    },
  ],
  category: "",
  name: "",
};

const userInitialState = {
  username: "",
  firstName: "",
  secondName: "",
  email: "",
  image: "",
  imageLink: "",
  gender: "male",
};

const resetInitialState = {
  email: "",
  OTP: "",
};

export function conversationsReducer(
  state = conversationsInitialState,
  action
) {
  switch (action.type) {
    case SET_CONVERSATIONS:
      return { ...state, conversations: action.payload };
    case SET_MESSAGES:
      return {
        ...state,
        conversations: state.conversations.map((conv) =>
          conv.id === action.payload.id
            ? {
                ...conv,
                conversation: action.payload.messages,
              }
            : conv
        ),
      };
    case SET_NEW_CATEGORY:
      return { ...state, category: action.payload };
    case SET_NEW_NAME:
      return { ...state, name: action.payload };
    case ADD_NEW_CONVERSATION:
      return {
        ...state,
        conversations: [...state.conversations, action.payload],
      };
    case SET_SELECTED_CONVERSATION_ID:
      return { ...state, selectedConversationId: action.payload };
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        conversations: state.conversations.map((conv) =>
          conv.id === action.payload.id
            ? {
                ...conv,
                conversation: [
                  ...conv.conversation,
                  {
                    id: uuid.v4(),
                    messageText: action.payload.messageText,
                    meSend: action.payload.meSend,
                    date: action.payload.date,
                  },
                ],
              }
            : conv
        ),
      };
    default:
      return state;
  }
}

export function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case SET_USER:
      return { state: action.payload };
    default:
      return state;
  }
}

export function resetReducer(state = resetInitialState, action) {
  switch (action.type) {
    case SET_OTP:
      return { ...state, OTP: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
}
