import { nanoid } from "nanoid";

// Action Value
const ADD_TODO = "todo/ADD_TODO";
const DELETE_TODO = "todo/DELETE_TODO";
const CHANGE_IS_DONE = "todo/CHANGE_IS_DONE";
// Action Creator는 저기 TodoInput이나 TodoContainer에서 payload로 인풋한 데이터를 모은 객첵를 받아.
// 받으면? addTodo함수의 경우 type이 ADD_TODO이고, payload는 위에서 말한 인풋한 데이터 모은 객체인 객체를 반환해.
// 그래서 그것을 dispatch로 다시 여기로 떤져서 리듀서를 돌려.
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
// 초기값 선언. 근데 왜 초기값 선언을 객체로 했지??????
const initialState = { todo: [{ id: nanoid(), title: "title", content: "컨텐츠", isDone: false }] };
// Reducer
const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      //(1) state를 풀어서 todo:[]로 풀어줄거야.
      //(2) todo배열 안에도 state.todo배열을 풀어서 객체 요소(action.payload)를 추가할거야.
      console.log("state : ", state)
      return { ...state, todo: [...state.todo, action.payload] };
    case DELETE_TODO:
      return { ...state, todo: state.todo.filter((item) => item.id !== action.payloadId) };
    case CHANGE_IS_DONE:
      return {
        ...state,
        todo: state.todo.map((item) => {
          if (item.id === action.payloadId) {
            return { ...item, isDone: !item.isDone };
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
