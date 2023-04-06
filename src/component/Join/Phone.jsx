import React from 'react'
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Join.css'

const Phone = () => {
    const [phoneNum, setPhoneNum] = useState(""); // 휴대폰 번호
    const [veritext, setVeritext] = useState("") // 인증번호 input

    const [phonenumMessage, setPhoneMessage] = useState(""); // 전화번호 메세지
    const [veritextMessage, setVeriTextMessage] = useState("") 

    const [veri, setVeri] = useState(false);

    const phoneNumber = (e) => {
        let phoneregExp = /^[0-9]{11}$/;
        setVeri(e.target.value);
        console.log(e.target.value);
        if (phoneNum.length === 0) {
          setPhoneMessage("필수요소입니다");
          setVeri(false)
        }else if (phoneNum.length > 11){
          setPhoneMessage("번호 11자리 입력하세요")
          setVeri(false)
        }else if (isNaN(phoneNum)) {
          setPhoneMessage("숫자만 입력해주세요");
          setVeri(false)
        } else {
          setPhoneMessage("")
          setVeri(true)
        }
      };

      const btn = () => {
        if(phoneNumber === 11){
          alert("인증번호가 발송되었습니다.")
        }
      }
    
      const numtxt = (e) => {
        setVeritext(e.target.value)
        console.log(e.target.value)
        if(e.target.value == '1234') {
          setVeriTextMessage("인증되었습니다.")
          setVeri(true)
        }else if(e.target.value.length === 0){
          setVeriTextMessage("인증번호를 입력해주세요")
          setVeri(false)
        } else {
          setVeriTextMessage("인증번호 다시 확인해주세요.")
          setVeri(false)
        }
      }
  return (
    <div>
      <div className="phone-Number-box margin">
            <strong>휴대폰 번호</strong>

            <div className="phonenum">
              <div className="country">
                <select name="country">
                  <option value="82">대한민국 +82</option>
                  <option value="233">가나 +233</option>
                  <option value="30">그리스 +30</option>
                  <option value="49">독일 +49</option>
                </select>
              </div>
              <div className="number">
                <div className="num-inp">
                  <input
                    type="text"
                    name="phonenum"
                    placeholder="전화번호 입력"
                    onChange={phoneNumber}
                    onBlur={phoneNumber}
                  />
                </div>
                <button type="button" onClick={btn}>인증번호</button>
              </div>
              <p className="warn">{phonenumMessage}</p>

              <div className="disinput inp">
                <input type="text" placeholder="인증번호" onChange={numtxt}/>
              </div>

              <p>{veritextMessage}</p>

              <div className="event">
                <input type="checkbox" />
                <label htmlFor="">행사알림 동의</label>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Phone
