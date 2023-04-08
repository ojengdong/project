/* eslint-disable */
import React from "react";
import { useCookies } from 'react-cookie'
import './Login.css'
import Ragister from "./Ragister";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import naver from "./images/로그인 아이콘-02.png"; // naver icon
import apple from "./images/로그인 아이콘-03.png"; // apple icon
import kakao from "./images/로그인 아이콘-04.png"; // kakao icon
import deidsth from "./images/로그인 아이콘-06.png"; // uncheck
import idsth from "./images/로그인 아이콘-05.png"; // check

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [idSave, setIdSave] = useState(false);
  const [idvalue, setIdValue] = useState("");
  const [pwvalue, setPwValue] = useState("");
  const [cookie, setCookie, removeCookie] = useState(["userInfo"])

  useEffect(()=> {
    const id = localStorage.getItem("idSave");
    if(id){
      setIdSave(JSON.parse(id));
      console.log(id);
    }
  }, [])

  useEffect(()=> {
    localStorage.setItem("idSave",JSON.stringify(idSave));
    console.log(idSave);
  }, [idSave])

  const handleIdChange = (e) =>{
    setIdValue(e.target.value);
    console.log(idvalue)
  }

  const handlePwChange = (e) => {
    setPwValue(e.target.value);
  }

  const handleSubmit = () => {
    const userInfo = {id: idvalue, pw:pwvalue};
    setCookie ("userInfo", userInfo);
    console.log(cookie)
  }
  return (
    <div className="wrapper">
      <div className="container">
        <div className="text">
          <h1>로그인</h1>
          <span>
            로그인 하시면 대전광역시의 모든 서비스를 이용 하실 수 있습니다.
            <br/>
            아직 회원이 아니시면 회원가입을 해주세요.
          </span>
        </div>
        <div>
          {/* 아이디 input */}
          <div className="input-id login-inputbox">
            <p className="login-warn">아이디</p>
            <div className="input-box">
              <input type="text" name="userid" onChange={handleIdChange}/>
            </div>
          </div>
          {/* 비밀번호 input */}
          <div className="input-pw login-inputbox">
            <p className="login-warn">비밀번호</p>
            <div className="input-box">
              <input type="password" name="userpw" onChange={handlePwChange}/>
            </div>
          </div>
          {/* 아이디 저장 및 아이디 찾기, 비밀번호 찾기 */}
          <div className="login-functionbox">
              <div className="keeptext-box">
                <div
                  htmlFor="id"
                  className="check-img"
                  style={
                    idSave == true
                      ? { backgroundImage: `url(${idsth})` }
                      : { backgroundImage: `url(${deidsth})` }
                  }
                  onClick={() => {
                    setIdSave(!idSave);
                  }}
                ></div>

                <p
                  onClick={() => {setIdSave(!idSave);}}
                >
                  아이디 저장
                </p>
              </div>
              <div className="find-wrapbox">
                <ul>
                  <li>아이디찾기</li>
                  <div></div>
                  <li>비밀번호 찾기</li>
                </ul>
              </div>
            </div>
        </div>
      </div>

      {/* 로그인, 회원가입 버튼 */}
      <div className="login-btn-box">
        <Link to='/'>
        <button type="button" id="login-btn" onClick={handleSubmit} disabled={disabled}>
          로그인
        </button>
        </Link>
        <Link to="/Ragister">
          <button type="submit" id="Ragister-btn">
            회원가입
          </button>
        </Link>
      </div>

      {/* sns계정 */}
      <div className="sns-box">
        <div className="sns-borderbox">
          <div className="sns-border"></div>
          <div>SNS 계정으로 로그인</div>
          <div className="sns-border"></div>
        </div>

        <div className="sns-img">
          <img src={naver} alt="" />
          <img src={kakao} alt="" />
          <img src={apple} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
