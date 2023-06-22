import React from "react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/config/modules/todo";
import { styled } from "styled-components";

export const TodoInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onReset = () => {
    setTitle("");
    setContent("");
  };
  //Todo.js로 인풋 넘기는 용도의 dispatch
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title === "") return;
    dispatch(
      addTodo({
        id: nanoid(),
        title,
        content,
        isDone: false,
      })
    );
    onReset();
  };

  return (
    <StInputForm>
      <form onSubmit={onSubmitHandler}>
        제목
        <StInput
          type="text"
          value={title}
          onChange={(event) => {
            {
              setTitle(event.target.value);
            }
          }}
        />
        내용
        <StInput
          type="text"
          value={content}
          onChange={(event) => {
            {
              setContent(event.target.value);
            }
          }}
        />
        <StButton>제출하기</StButton>
      </form>
    </StInputForm>
  );
};

export default TodoInput;

const StInputForm = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  border: 2px solid lightgreen;
  background-color: lightgreen;
  border-radius: 50px;
`;
const StInput = styled.input`
  border: 1px solid white;
  margin: 20px;
  height: 50px;
  width: 300px;
  border-radius: 50px;
  outline: none;
  padding: 0 15px;
  font-size: 20px;
`;
const StButton = styled.button`
  border: none;
  background-color: white;
  margin: 20px;
  height: 50px;
  width: 120px;
  border-radius: 20px;
`;
