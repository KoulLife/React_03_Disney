import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";

const Nav = () => {

  const [show, setShow] = useState(false);
  const {pathname} = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate(); //페이지 이동을 위한 훅

  useEffect(() => {
    window.addEventListener('scroll', handScroll)
    return () => {
      window.removeEventListener('scroll', handScroll);
    }
  },[])

  // 검색한 내용이 e.target.value로 나온다.
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  }

  const handScroll = () => {
    if (window.scrollY > 50){
      setShow(true);
    }else {
      setShow(false);
    }
  }

  return (
    <NavWrapper show = {show}>
      <Logo>
        <img
          src="/images/logo.svg"
          alt="Disney Plus Logo"
          onClick={() => (window.location.href = "/")}
        />
      </Logo>

      {pathname === '/' ? (<Login>Login</Login>) :
        <Input
          value = {searchValue}
          onChange = {handleChange}
          className = 'nav__input'
          type = "text"
          placeholder = "검색해주세요."
        />}
    </NavWrapper>
  );
};

export default Nav;

const Login = styled.a`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.2s ease 0s;
  
  &:hover {
    background-color: #f9f9f9;
    color: #040714;
    cursor: pointer;
    border-color: transparent;
  }
`;

const Input  = styled.input`
  //가운데로 검색창 오도록 하기
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  
  background-color: rgba(0,0,0,0.582);
  border-radius: 5px;
  color: white;
  border: none;
  padding: 5px;
`;

const NavWrapper = styled.
  nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${props => props.show ? "#090b13" : "transparent"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  `;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  
  img {
    display: block;
    width: 100%;
  }
`;
