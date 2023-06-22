import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  //useParams로 TodoInput.jsx에서 기록된 Link의 to에 해당하는 값이 전달된다.(슬래쉬/ 뒷부분임)
  const params = useParams();
  console.log("params : ", params);
  // 구조분해할당으로 detail에 배열 대신 객체요소 할당되도록
  const [detailData] = useSelector((state) => state.todo.todo.filter((item) => item.id === params.id));
  console.log("detailData : ", detailData);
  return (
    <>
      <StDetailPageBox>
        <div
          style={{
            display: "block",
          }}
        >
          <StDetailPageBoxTop>
            <div>ID:{detailData.id}</div>
            <StDetailPageBoxTopBtn>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                이전으로
              </Link>
            </StDetailPageBoxTopBtn>
          </StDetailPageBoxTop>
          <h1>{detailData.title}</h1>
          <p>{detailData.content}</p>
        </div>
      </StDetailPageBox>
    </>
  );
};

export default Detail;

const StDetailPageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); /*translate(a%, b%) : 해당 요소의 a%만큼 x축 오른쪽으로, b%만큼 y축 아래쪽으로 이동.*/
  border: 1px solid grey;
  height: 400px;
  width: 600px;
`;
const StDetailPageBoxTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;
`;
const StDetailPageBoxTopBtn = styled.button`
  height: 50px;
  width: 150px;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid grey;
  background-color: white;
  color: black;
  border-radius: 20px;
`;
