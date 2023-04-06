/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/동의 아이콘 3.png"; // logo
import Footer from "./footer";
import "./Join.css";
import Login from './Login'
import Id from './Join/Id'
import Pw from './Join/Pw'
import Impo from './Join/Impo'
import Phone from './Join/Phone'

const Join = (props, e) => {
  const navigate = useNavigate()
  const [veri, setVeri] = useState(false)
  const [user, setUser] = useState(false)

  const joinuser = (e) => {
    e.preventDefault();


  }
  
  return (
    <div className="wrapper">
      <div className="join-container">
      <form onSubmit={navigate('/Login')}>
        <div className="logo-box">
          <h1>
            <img src={logo} alt="" />
          </h1>
        </div>
        <div className="inputbox">
          {/* 아이디 */}
          <Id setVeri={setVeri}/>

          {/* 비밀번호,비밀번호 재확인 */}
          <Pw setVeri={setVeri}/>

          {/* 이름, 생년월일, 성별, 본인확인 이메일 */}
          <Impo setVeri={setVeri}/>

          {/* 휴대폰 */}
          <Phone  setVeri={setVeri}/>
        </div>

        {/* 가입하기버튼*/}
        <div className="join-btn-box">
          <button type="submit" onSubmit={(e)=>{
           
            veri === fasle ? alert('필수요건을 입력하세요.') : navigate('/Login')
          }}>가입하기</button>
          
        </div>
          <Footer />
          </form>
      </div>
    </div>
  );
};

export default Join;