/* eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
import logo from "./images/동의 아이콘 3.png"; // logo
import lock from "./images/작성란 아이콘_대지 1.png"; // 자물쇠1
import unlock from "./images/작성란 아이콘-02.png"; // 자물쇠2
import Footer from "./footer";
import "./Join.css";

const Join = (props, e) => {
  // 초기값 세팅
  const [id, setId] = useState(""); // 아이디
  const [password, setPassword] = useState(""); // 비밀번호
  const [passwordChk, setPasswordChk] = useState(""); // 비밀번호 재확인
  const [name, setName] = useState(""); // 이름
  const [email, setEmail] = useState(""); // 이메일
  const [phoneNum, setPhoneNum] = useState(""); // 휴대폰 번호
  const [year, setYear] = useState(""); // 연도
  const [month, setMonth] = useState(""); //월
  const [day, setDay] = useState(""); // 일

  // 오류메세지 상태 저장
  const [idMessage, setIdMessage] = useState(""); // 아이디 메세지
  const [pwMessage, setPwMessage] = useState(""); // 비밀번호 메세지
  const [pwChkMessage, setPwChkMessage] = useState(""); // 비밀번호 재확인 메세지
  const [nameMessage, setNameMessage] = useState(""); // 이름 메세지
  const [emailMessage, setEmailMessage] = useState(""); // 이메일 메세지
  const [phonenumMessage, setPhoneMessage] = useState(""); // 전화번호 메세지
  const [birthMessage, setBirthMessage] = useState(""); // 생년월일 메세지

  let isId, isPw, isPwchk, isName, isEmail, isPhonenum,isBirth = false

  // 아이디
  const idfocusout = (e) => {
    setId(e.target.value);
    console.log(e.target.value);
    const idreg = /^[a-zA-z0-9]{4,12}$/;
    isId = false;
    if (id.length === 0) {
      setIdMessage("아이디를 입력해주세요");
    } else if (id.length < 4 || id.length > 12 === idreg) {
      setIdMessage("4 ~ 12자 대소문자 또는 숫자만 입력해 주세요!");
    } else {
      setIdMessage("사용 가능한 아이디 입니다.");
      isId = true;
    }
  };

  // 비밀번호
  const pwfocusout = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);

    isPw = false

    if (password.length === 0) {
      setPwMessage("비밀번호를 입력해주세요");
      isPw = false;
    } else if (password.length < 8 || password.length > 16) {
      setPwMessage("8 ~ 16자 가능합니다");
    } else {
      setPwMessage("사용가능합니다.");
      isPw = true;
    }
  };

  // 비밀번호 재확인
  const pwchkfocusout = (e) => {
    setPasswordChk(e.target.value);
    isPwchk = false
    if (passwordChk.length === 0) {
      setPwChkMessage("필수요소입니다.");
    } else if (password !== passwordChk) {
      setPwChkMessage("비밀번호가 다릅니다.");
    } else {
      setPwChkMessage("");
      isPwchk = true
    }
  };

  // 이름
  const namefocusout = (e) => {
    setName(e.target.value);

    isName = false
    if (name.length === 0) {
      setNameMessage("필수요소입니다.");
    } else {
      setNameMessage("");
      isName = true
    }
  };

  // 이메일
  const emailfocus = (e) => {
    setEmail(e.target.value);
    let emailregExp =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
    if (!emailregExp.test(email)) {
      setEmailMessage("이메일 주소를 다시 확인해주세요");
    } else {
      setEmailMessage("");
    }
  };

  const phoneNumber = (e) => {
    let phoneregExp = /^[0-9]{11}$/;
    setPhoneNum(e.target.value);
    console.log(e.target.value);

    isPhonenum = false;
    // setPhoneNum.test(phoneNum);
    // console.log(phoneNum.test(phoneNum));
    if (phoneNum.length === 0) {
      setPhoneMessage("필수요소입니다");
    } else if (isNaN(phoneNum)) {
      setPhoneMessage("숫자만 입력해주세요");
    } else {
      setPhoneMessage("");
      isPhonenum = true;
    }
  };

  // 생년월일
  const birth = (e) => {
    setYear, setMonth, setDay(e.target.value);

    isBirth = false

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
    }else if (year.length != 4 && year.length === 4) {
      setBirthMessage("태어난 연도 4자리를 정확하게 입력해주세요");
    }else if (day.length === 0 || day > 31 || day < 1) {
      setBirthMessage("태어난 일(날짜)을 정확하게 입력해주세요");
    } else {
      setBirthMessage("");
      isBirth = true;
    }

    
  };

  const [code, setCode] = useState('');
  const[inputCode, setInputCode] = useState('');

  useEffect(() => {
    let code = '';
    for(let i = 0; i < 4; i++) {
      code += Math.floor(Math.random() * 10);
    }
    setCode(code);
  }, [])

  const handleChange = (e) => {
    setInputCode(e.target.value);
    console.log(setInputCode)
  }

  const handleClick = () => {
    if(inputCode === code) {
      alert('인증에 성공했습니다.');
    }else {
      alert('인증번호가 일치하지 않습니다.')
    }
  }

  return (
    <div className="wrapper">
      <div className="join-container">
        <div className="logo-box">
          <h1>
            <img src={logo} alt="" />
          </h1>
        </div>
        <div className="inputbox">
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

          {/* 비밀번호 */}
          <div className="join-pw margin">
            <div className="password margin ">
              <strong className="pwstr">비밀번호</strong>
              <div className="inp">
                <input
                  type="password"
                  name="pw"
                  vlaue={password}
                  onChange={pwfocusout}
                  onBlur={pwfocusout}
                />
              </div>
              <p className="warn">{pwMessage}</p>
            </div>

            {/* 비밀번호 재확인 */}
            <div className="pw-chk  margin">
              <strong>비밀번호 재확인</strong>
              <div className="inp">
                <input
                  type="password"
                  name="pw-chk"
                  value={passwordChk}
                  onChange={pwchkfocusout}
                  onBlur={pwchkfocusout}
                />
              </div>
              <p className="warn">{pwChkMessage}</p>
            </div>
          </div>

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
              <input
                type="text"
                name="email"
                onChange={emailfocus}
                onBlur={emailfocus}
              />
            </div>
            <p className="warn">{emailMessage}</p>
          </div>

          {/* 휴대폰 */}
          <div className="phone-Number-box margin">
            <strong>휴대폰 번호</strong>

            <div className="phonenum">
              <div className="country">
                <select name="country">
                  <option value="82">대한민국 +82</option>
                  <option value="233">가나 +233</option>
                  <option value="30">그리스 +30</option>
                  <option value="49">독일 +49</option>
                  <option value="960">몰디브 +960</option>
                  <option value="1">미국/캐나다 +1</option>
                  <option value="254">케나 +254</option>
                  <option value="">프랑스 +</option>
                </select>
              </div>
              <div className="number">
                <div className="num-inp">
                  <input
                    type="text"
                    name="phonenum"
                    placeholder="전화번호 입력"
                    onChange={handleChange}
                    onBlur={phoneNumber}
                    value={inputCode}
                  />
                </div>
                <button type="button" onClick={handleClick}>인증번호</button>
              </div>
              <p className="warn">{phonenumMessage}</p>

              <div className="disinput inp">
                {/* API로 인증번호따오기 */}
                <input type="text" placeholder="인증번호"  />
              </div>

              <div className="event">
                <input type="checkbox" />
                <label htmlFor="">행사알림 동의</label>
              </div>
            </div>
          </div>
        </div>

        {/* 가입하기버튼*/}
        <div className="join-btn-box">
          <button>가입하기</button>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Join;