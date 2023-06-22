import { nanoid } from "nanoid";
const ADD_TODO = "todo/ADD_TODO";
const DELETE_TODO = "todo/DELETE_TODO";
const CHANGE_IS_DONE = "todo/CHANGE_IS_DONE";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payloadId: payload,
  };
};

export const changeIsDone = (payload) => {
  return {
    type: CHANGE_IS_DONE,
    payloadId: payload,
  };
};

const initialState = { todo: [{ id: nanoid(), title: "title", content: "컨텐츠", isDone: false }] };

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todo: [...state.todo, action.payload] };
    case DELETE_TODO:
      return { ...state, todo: state.todo.filter((item) => item.id !== action.payloadId) };
    case CHANGE_IS_DONE:
      return {
        ...state,
        todo: state.todo.map((item) => {
          if (item.id === action.payloadId) {
            return {
              ...item,
              isDone: !item.isDone,
            };
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
};

export default todo;
