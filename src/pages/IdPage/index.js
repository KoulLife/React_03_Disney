import React, {useState} from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const IdPage = () => {

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const handleId = (e) => {
    setId(e.target.value)
  }

  const handlePw = (e) => {
    setPw(e.target.value)
  }

  const handleLogin = () => {
    if (id === 'jdi' && pw === '1234'){
      navigate("/main");
    }
  }

  return (
    <div>
      <BgImage>
        <IdWrapper>
          <Content>
            <Input
              onChange = {handleId}
              className = 'nav__input'
              type = "text"
              placeholder = "ID"
            />
            <Input
              onChange = {handlePw}
              className = 'nav__input'
              type = "password"
              placeholder = "PW"
            />
            <Button
              onClick = {handleLogin}
            >
              Login
            </Button>
          </Content>
        </IdWrapper>
        <LoginText>
          LOGIN
        </LoginText>
      </BgImage>
    </div>
  );
};

export default IdPage;

const Button = styled.button`
  margin-top: 10px;
  height: 50px;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const IdWrapper = styled.
  nav`
  opacity: 0.5;
  position: fixed;
  top: 12rem;
  left: 25rem;
  right: 25rem;
  height: 25rem;
  background-color: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  `;

const Content = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  
  display: grid;
  height: 5rem;
  width: 30rem;
`;

const LoginText = styled.h2`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);

  font: italic 3rem "Fira Sans", serif;
  top: 30%;
  color: white;
  justify-content: start;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  z-index: 4;
`;

const Input  = styled.input`
  //가운데로 검색창 오도록 하기
  position: relative;
  height: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
  
  margin-top: 5px;
  background-color: rgba(0,0,0,0.582);
  border-radius: 5px;
  color: white;
  border: none;
  padding: 5px;
`;