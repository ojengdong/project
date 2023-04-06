import React from 'react'
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Join.css'

const Id = () => {
    const [id, setId] = useState(""); // 아이디
    const [idMessage, setIdMessage] = useState(""); // 아이디 메세지
    const [idveri, setIdVeri] = useState(false);

    const idfocusout = (e) => {
        setId(e.target.value);
        console.log(e.target.value);
        const idreg = /^[a-zA-z0-9]{4,12}$/;
        
        if (id.length === 0) {
          setIdMessage("아이디를 입력해주세요");
          setIdVeri(false)
        } else if (id.length < 4 || id.length > 12 === idreg) {
          setIdMessage("4 ~ 12자 대소문자 또는 숫자만 입력해 주세요!");
          setIdVeri(false)
        } else {
          setIdMessage("사용 가능한 아이디 입니다.");
          setIdVeri(true)
        }
      };
  return (
    <div>
      
          {/* 아이디 */}
          <div className="join-id  margin ">
            <strong>아이디</strong>
            <div className="inp">
              <input
                type="text"
                name="id"
                value={id}
                onChange={idfocusout}
                onBlur={idfocusout}
              />
            </div>
            <p className="warn">{idMessage}</p>
          </div>
    </div>
  )
}

export default Id
