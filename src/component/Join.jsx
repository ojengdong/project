import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/동의 아이콘 3.png";
import Footer from "./footer";
import "./Join.css";
import Login from "./Login";
import Id from "./Join/Id";
import Pw from "./Join/Pw";
import Impo from "./Join/Impo";
import Phone from "./Join/Phone";

const Join = () => {
  const navigate = useNavigate();
  const [idVeri, setIDVeri] = useState(false); // ID 검증 상태
  const [pwVeri, setPWVeri] = useState(false); // 비밀번호 검증 상태
  const [impoVeri, setImpoVeri] = useState(false); // 필수 입력 항목 검증 상태
  const [phoneVeri, setPhoneVeri] = useState(false); // 전화번호 검증 상태

  // |이 코드는 handleJoin 함수를 정의하고, 입력된 값들이 모두 검증되었을 경우 로그인 페이지로 이동하는 기능을 수행합니다.
  // |
  // |코드 특징:
  // |- 필수 입력 항목이 누락되었을 경우 경고창을 띄워 사용자에게 알려줍니다.
  // |- navigate 함수를 사용하여 페이지 이동을 처리하므로, 코드가 간결하고 가독성이 좋습니다.

  const handleJoin = () => {
    if (idVeri && pwVeri && impoVeri && phoneVeri) {
      // 모든 검증이 완료되었을 경우
      navigate("/Login"); // 로그인 페이지로 이동
    } else {
      alert("필수입력항목을 입력해주세요"); // 필수 입력 항목이 누락되었을 경우 경고창 출력
    }
  };

  return (
    <div className="wrapper">
      <div className="join-container">
        <form>
          <div className="logo-box">
            <h1>
              <img src={logo} alt="" />
            </h1>
          </div>
          <div className="inputbox">
            <Id setIDVeri={setIDVeri} />
            {/* // ID 입력 컴포넌트 */}
            <Pw setPWVeri={setPWVeri} />
            {/* // 비밀번호 입력 컴포넌트 */}
            <Impo setImpoVeri={setImpoVeri} />
            {/* // 필수 입력 항목 입력 컴포넌트 */}
            <Phone setPhoneVeri={setPhoneVeri} />
            {/* // 전화번호 입력 컴포넌트 */}
          </div>
          <div className="join-btn-box">
            <button onClick={handleJoin}>가입하기</button>
            {/* // 가입 버튼 */}
          </div>
          <Footer />
          {/* // 하단 푸터 */}
        </form>
      </div>
    </div>
  );
};

export default Join;
