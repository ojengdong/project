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

const Join = (props) => {
  const navigate = useNavigate();
  const [idVeri, setIDVeri] = useState(false);
  const [pwVeri, setPWVeri] = useState(false);
  const [impoVeri, setImpoVeri] = useState(false);
  const [phoneVeri, setPhoneVeri] = useState(false);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");

  const handleJoin = (e) => {
    e.preventDefault();

    if (idVeri && pwVeri && impoVeri && phoneVeri) {
      navigate("/Login");
    } else {
      alert("필수입력항목을 입력해주세요");
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
            <Pw setPWVeri={setPWVeri} />
            <Impo setImpoVeri={setImpoVeri} />
            <Phone setPhoneVeri={setPhoneVeri} />
          </div>
          <div className="join-btn-box">
            <button onClick={handleJoin}>가입하기</button>
          </div>
          <Footer />
        </form>
      </div>
    </div>
  );
};

export default Join;
