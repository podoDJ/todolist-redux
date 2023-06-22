import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { deleteTodo } from "../redux/config/modules/todo";
import { changeIsDone } from "../redux/config/modules/todo";
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';


function TodoContainer({listIsDone}) {
  const {todo} = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  return (
    <>
    <h1>{listIsDone ? "💀 해치웠나? 💀" : "☠️ 해치우자! ☠️"}</h1>
    <StTodoListGrid>
        {todo
          .filter((item) => item.isDone === listIsDone)
          .map((item) => {
            return (
              <StTodoList key={item.id}>
                <Link to={`/${item.id}`} style={{ textDecoration: "none" }}>상세보기</Link>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              <StBtnCtn>
                <StBtn onClick={() => dispatch(deleteTodo(item.id))}>삭제하기</StBtn>
                <StBtn onClick={() => dispatch(changeIsDone(item.id))}>{item.isDone ? "취소하기" : "완료하기"}</StBtn>    
                </StBtnCtn>
              </StTodoList>
            );
          })}
          </StTodoListGrid>
    </>
  )
}

export default TodoContainer

const StTodoListGrid = styled.main`
  display: grid;
  max-width: 1200px;
  grid-template-columns: repeat(3, 4fr);
  justify-content: center;
  gap: 20px;
`

const StTodoList = styled.div`
  display: block;
  position: relative;
  border: 4px solid lightgreen;
  border-radius: 20px;
  padding: 30px;
`

 const StBtnCtn = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
`

export const StBtn = styled.button`
  height: 50px;
  width: 150px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  background-color: lightgreen;
  color: white;
  border-radius: 20px;
`


