import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/config/modules/todo";
import { deleteTodo } from "./redux/config/modules/todo";
import { changeIsDone } from "./redux/config/modules/todo";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.todo;
  });
  console.log("data가 뭔데?? ", data);
  return (
    <>
      <nav style={{ backgroundColor: "lightgreen" }}>
        네비게이션
        <div>
          제목
          <input
            type="text"
            value={title}
            onChange={(event) => {
              {
                setTitle(event.target.value);
              }
            }}
          />
          내용
          <input
            type="text"
            value={content}
            onChange={(event) => {
              {
                setContent(event.target.value);
              }
            }}
          />
          <button
            onClick={() => {
              dispatch(addTodo(title, content));
            }}
          >
            제출하기
          </button>
        </div>
      </nav>
      <main style={{ backgroundColor: "lightblue" }}>
        <h1>진행중 임시</h1>
        {data
          .filter((item) => item.isDone === false)
          .map((item) => {
            // console.log("item", item)
            return (
              <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }} key={item.id}>
                <h2>제목 {item.title}</h2>
                <p>내용 {item.content}</p>
                <p>ID {item.id}</p>
                <p>DONE? {item.isDone.toString()}</p>
                <button onClick={() => dispatch(deleteTodo(item.id))}>삭제하기</button>
                <button onClick={() => dispatch(changeIsDone(item.id))}>{item.isDone ? "취소하기" : "완료하기"}</button>    
              </div>
            );
          })}

        <h1>완료 임시</h1>
        {data
          .filter((item) => item.isDone === true)
          .map((item) => {
            // console.log("item", item)
            return (
              <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }} key={item.id}>
                <h2>제목 {item.title}</h2>
                <p>내용 {item.content}</p>
                <p>ID {item.id}</p>
                <p>DONE? {item.isDone.toString()}</p>
                <button onClick={() => dispatch(deleteTodo(item.id))}>삭제하기</button>
                <button onClick={() => dispatch(changeIsDone(item.id))}>{item.isDone ? "취소하기" : "완료하기"}</button>
              </div>
            );
          })}
      </main>
      <footer style={{ backgroundColor: "lightyellow" }}>푸터</footer>
    </>
  );
}

export default App;
