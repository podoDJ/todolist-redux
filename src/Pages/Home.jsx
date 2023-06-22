import React from "react";
import TodoInput from "../component/TodoInput";
import TodoContainer from "../component/TodoContainer";
import styled from "styled-components";

const Home = () => {
  return (
    <StDashBoardCtn>
      <nav>
        {/* Todo입력 */}
        <TodoInput />
      </nav>
      <main>
        {/* TodoList 페인팅 listIsDone: 진행중/완료 분기용도 */}
        <TodoContainer listIsDone={false} />
        <TodoContainer listIsDone={true} />
      </main>
    </StDashBoardCtn>
  );
};

export default Home;

const StDashBoardCtn = styled.section`
  max-width: 1200px;
  min-width: 800px;
  margin: 0px auto;
`;
