import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Join.css";

const Pw = (props) => {
  const [password, setPassword] = useState("");
  const [passwordChk, setPasswordChk] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pwChkMessage, setPwChkMessage] = useState("");

  const pwfocusout = (e) => {
    setPassword(e.target.value);
    if (password.length === 0) {
      setPwMessage("비밀번호를 입력해주세요");
    } else if (password.length < 8 || password.length > 16) {
      setPwMessage("8 ~ 16자 가능합니다");
    } else {
      setPwMessage("사용가능합니다.");
    }
  };

  const pwchkfocusout = (e) => {
    setPasswordChk(e.target.value);
    if (passwordChk.length === 0) {
      setPwChkMessage("필수요소입니다.");
      props.setPWVeri(false);
    } else if (password !== passwordChk) {
      setPwChkMessage("비밀번호가 다릅니다.");
      props.setPWVeri(false);
    } else {
      setPwChkMessage("");
      props.setPWVeri(true);
    }
  };

  return (
    <div>
      <div className="join-pw margin">
        <div className="password margin ">
          <strong className="pwstr">비밀번호</strong>
          <div className="inp">
            <input
              type="password"
              name="pw"
              value={password}
              onChange={pwfocusout}
              onBlur={pwfocusout}
            />
          </div>
          <p className="warn">{pwMessage}</p>
        </div>

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
    </div>
  );
};

export default Pw;
