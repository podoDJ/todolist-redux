import { nanoid } from "nanoid";
const ADD_TODO = "todo/ADD_TODO";
const DELETE_TODO = "todo/DELETE_TODO";
const CHANGE_IS_DONE = "todo/CHANGE_IS_DONE"

export const addTodo = (title, content) => {
  return {
    type: ADD_TODO,
    payload_title: title,
    payload_content: content,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payloadId: payload,
  }
}

export const changeIsDone = (payload) => {
  return {
    type: CHANGE_IS_DONE,
    payloadId: payload,
  }
}

// const initialState = [{ id: nanoid(), title: "title", content: "컨텐츠", isDone: false }];

const todo = (state=[], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: nanoid(),
          title: action.payload_title,
          content: action.payload_content,
          isDone: false,
        },
      ];
    case DELETE_TODO:
      return state.filter((item) => item.id !==action.payloadId)
    case CHANGE_IS_DONE:
      return state.map((item) => {
        if(item.id === action.payloadId) {
          return {
            ...item,
            isDone: !item.isDone,
          }
        } else {
          return item;
        }
      })
    default:
      return state;
  }
};


export default todo;
