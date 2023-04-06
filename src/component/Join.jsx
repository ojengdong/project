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
 
  const [phonenumMessage, setPhoneMessage] = useState(""); // 전화번호 메세지
  const [veritextMessage, setVeriTextMessage] = useState("") 

  const navigate = useNavigate()
  return (
    <div className="wrapper">
      <div className="join-container">
      <form onSubmit={(e) => navigate('/Login')}>
        <div className="logo-box">
          <h1>
            <img src={logo} alt="" />
          </h1>
        </div>
        <div className="inputbox">
          {/* 아이디 */}
          <Id/>

          {/* 비밀번호,비밀번호 재확인 */}
          <Pw/>

          {/* 이름, 생년월일, 성별, 본인확인 이메일 */}
          <Impo/>

          {/* 휴대폰 */}
          <Phone/>
        </div>

        {/* 가입하기버튼*/}
        <div className="join-btn-box">
          <button type="submit" onClick={()=>{
            localStorage.setItem('id',[veri])
            veri === false ? alert('필수요건을 입력하세요') : navigate('/Login');
          }}>가입하기</button>
          
        </div>
          <Footer />
          </form>
      </div>
    </div>
  );
};

export default Join;