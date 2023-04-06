import React from 'react'
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Join.css'

const Impo = () => {
    const [name, setName] = useState(""); // 이름
    const [email, setEmail] = useState(""); // 이메일
    const [year, setYear] = useState(""); // 연도
    const [month, setMonth] = useState(""); //월
    const [day, setDay] = useState(""); // 일

    const [nameMessage, setNameMessage] = useState(""); // 이름 메세지
    const [emailMessage, setEmailMessage] = useState(""); // 이메일 메세지
    const [birthMessage, setBirthMessage] = useState(""); // 생년월일 메세지

    const [veri, setVeri] = useState(false);

    // 이름
  const namefocusout = (e) => {
    setName(e.target.value);
    if (name.length === 0) {
      setNameMessage("필수요소입니다.");
      setVeri(false)
    } else {
      setNameMessage("");
      setVeri(true)
    }
  };

  // 이메일
  const emailfocus = (e) => {
    setEmail(e.target.value);
    let emailregExp = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
    if (email != emailregExp.test(email)) {
      setEmailMessage("이메일 주소를 다시 확인해주세요");
    } else {
      setEmailMessage("");
    }
  };

  // 생년월일
  const birth = (e) => {
   // setYear, setMonth, setDay(e.target.value);

    // 현재 날짜 및 시간
    let now = new Date();
    console.log(now);

    let nowstramp = now.getTime();
    now = now.getFullYear();
    console.log(now);

    let bir = new Date(year, month, day);
    bir = bir.getTime();
    console.log(year);

    if (isNaN(year) == true || isNaN(month) == true || isNaN(day) == true) {
      setBirthMessage("생년월일을 다시 확인해주세요");
      setVeri(false)
    }else if (year.length != 4 && year.length === '') {
      setBirthMessage("태어난 연도 4자리를 정확하게 입력해주세요");
      setVeri(false)
    }else if (day.length === 0 && day > 31 && day < 1) {
      setBirthMessage("태어난 일(날짜)을 정확하게 입력해주세요");
      setVeri(false)
    } else {
      setBirthMessage("");
      setVeri(true)
    }
  };

  return (
    <div>
        {/* 이름 */}
      <div className="join-name-box  margin">
            <strong>이름</strong>
            <div className="inp">
              <input
                type="text"
                value={name}
                onChange={namefocusout}
                onBlur={namefocusout}
              />
            </div>
            <p className="warn">{nameMessage}</p>
        </div>

        {/* 생년월일 */}
        <div className="birth-box margin">
            <label htmlFor="">
              <strong>생년월일</strong>
              <div className="three-box">
                <div className="year-box">
                  <input
                    type="text"
                    name="year"
                    className="year"
                    maxLength={4}
                    placeholder="년(4자)"
                    onChange={birth}
                    onBlur={birth}
                    // value={year}
                  />
                </div>
                <div className="month-box">
                  <select
                    name="month"
                    className="month"
                    onChange={birth}
                    onBlur={birth}
                    //value={month}
                  >
                    <option value="">월</option>
                    <option value="0">1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option value="4">5</option>
                    <option value="5">6</option>
                    <option value="6">7</option>
                    <option value="7">8</option>
                    <option value="8">9</option>
                    <option value="9">10</option>
                    <option value="10">11</option>
                    <option value="11">12</option>
                  </select>
                </div>
                <div className="day-box">
                  <input
                    type="text"
                    name="day"
                    className="day"
                    maxLength={2}
                    placeholder="일"
                    onChange={birth}
                    onBlur={birth}
                    //value={props.day}
                  />
                </div>
              </div>
              <p>{birthMessage}</p>
            </label>
          </div>

          {/* 성별 */}
          <div className="gender-box margin">
            <strong>성별</strong>
            <div className="sel">
              <select name="">
                <option value="0">성별</option>
                <option value="1">남자</option>
                <option value="2">여자</option>
              </select>
            </div>
          </div>

          {/* 이메일 */}
          <div className="e-mail margin">
            <strong>
              본인 확인 이메일<span>(선택)</span>
            </strong>
            <div className="inp">
              <input type="text" name="email" onChange={emailfocus} />
            </div>
            <p className="warn">{emailMessage}</p>
          </div>
    </div>
  )
}

export default Impo
