import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  console.log("params : ", params);
  const paramsData = params.id.split("&");
  console.log("paramsData : ", paramsData);
  return (
    <>
      <StDetailPageBox>
        <div style={{
          display: "block"
        }}>
        <StDetailPageBoxTop>
          <div>ID:{paramsData[0]}</div>
          <StDetailPageBoxTopBtn>
            <Link to={"/"} style={{ textDecoration: "none" }}>이전으로</Link>
          </StDetailPageBoxTopBtn>
        </StDetailPageBoxTop>
        <h1>{paramsData[1]}</h1>
        <p>{paramsData[2]}</p>
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
  transform: translate(-50%, -50%);
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