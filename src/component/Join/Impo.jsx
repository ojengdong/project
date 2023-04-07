import React from 'react'
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Join.css'

const Impo = (props) => {
  const [name, setName] = useState(""); // 이름 상태값과 상태를 변경할 함수를 정의하고 초기값을 빈 문자열로 설정
  const [email, setEmail] = useState(""); // 이메일 상태값과 상태를 변경할 함수를 정의하고 초기값을 빈 문자열로 설정
  const [year, setYear] = useState(""); // 생년 상태값과 상태를 변경할 함수를 정의하고 초기값을 빈 문자열로 설정
  const [month, setMonth] = useState(""); // 생월 상태값과 상태를 변경할 함수를 정의하고 초기값을 빈 문자열로 설정
  const [day, setDay] = useState(""); // 생일 상태값과 상태를 변경할 함수를 정의하고 초기값을 빈 문자열로 설정

  const [nameMessage, setNameMessage] = useState(""); // 이름 입력에 대한 안내 메시지 상태값과 상태를 변경할 함수를 정의하고 초기값을 빈 문자열로 설정
  const [emailMessage, setEmailMessage] = useState(""); // 이메일 입력에 대한 안내 메시지 상태값과 상태를 변경할 함수를 정의하고 초기값을 빈 문자열로 설정
  const [birthMessage, setBirthMessage] = useState(""); // 생년월일 입력에 대한 안내 메시지 상태값과 상태를 변경할 함수를 정의하고 초기값을 빈 문자열로 설정

  // |이 코드는 이름 입력란에서 포커스가 벗어났을 때 실행되는 함수입니다. 입력된 이름 값을 상태값에 저장하고, 이름이 입력되지 않았을 경우에는
  // 필수요소임을 안내하는 메시지를 설정하고 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 false로 설정합니다. 반면, 이름이 입력되었을 경우에는 이름 입력에 대한 안내 메시지를 초기화하고 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 true로 설정합니다.
  // |
  // |코드의 좋은 점은 입력된 이름 값을 상태값에 저장하고 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 설정하여 유효성 검사를 수행한다는 것입니다.
  // 이를 통해 사용자가 필수 입력 항목을 모두 입력하지 않았을 때 적절한 안내 메시지를 제공하고, 필수 입력 항목이 모두 입력되었을 때 다음 단계로 진행할 수 있도록 도와줍니다.
  // |
  // |하지만 코드의 나쁜 점은 setNameMessage와 props.setImpoVeri 함수가 외부에서 전달되어 사용되고 있다는 것입니다. 이는 코드의 가독성을 떨어뜨리고 유지보수를 어렵게 만들 수 있습니다. 따라서 이러한 함수들은 가능한 한 내부에서 선언하고 사용하는 것이 좋습니다.
  const namefocusout = (e) => {
    // 이름 입력란에서 포커스가 벗어났을 때 실행되는 함수
    setName(e.target.value); // 입력된 이름 값을 상태값에 저장
    if (name.length === 0) {
      // 이름이 입력되지 않았을 경우
      setNameMessage("필수요소입니다."); // 이름 입력에 대한 안내 메시지를 설정
      props.setImpoVeri(false); // 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 false로 설정
    } else {
      // 이름이 입력되었을 경우
      setNameMessage(""); // 이름 입력에 대한 안내 메시지를 초기화
      props.setImpoVeri(true); // 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 true로 설정
    }
  };

  // |이 코드는 이메일 입력란에서 포커스가 되었을 때 실행되는 함수입니다. 이메일 값을 상태값에 저장하고, 이메일 형식을 검증하기 위한 정규식을 사용하여 이메일 주소를 검증합니다.
  // |
  // |좋은 점:
  // |- 이메일 형식을 검증하기 위한 정규식을 사용하여, 올바른 이메일 주소를 입력받을 수 있습니다.
  // |- 이메일 입력에 대한 안내 메시지를 설정하여, 사용자가 올바른 이메일 주소를 입력할 수 있도록 도와줍니다.
  // |
  // |나쁜 점:
  // |- 이메일 형식을 검증하는 정규식이 복잡하여, 코드를 이해하기 어려울 수 있습니다.
  // |- 이메일 입력에 대한 안내 메시지가 간단하여, 사용자가 어떤 부분을 잘못 입력했는지 알기 어려울 수 있습니다.
  const emailfocus = (e) => {
    // 이메일 입력란에서 포커스가 되었을 때 실행되는 함수
    setEmail(e.target.value); // 입력된 이메일 값을 상태값에 저장
    let emailregExp =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i; // 이메일 형식을 검증하기 위한 정규식
    if (!emailregExp.test(email)) {
      // 입력된 이메일 값이 정규식에 맞지 않을 경우
      setEmailMessage("이메일 주소를 다시 확인해주세요"); // 이메일 입력에 대한 안내 메시지를 설정
    } else {
      // 입력된 이메일 값이 정규식에 맞을 경우
      setEmailMessage(""); // 이메일 입력에 대한 안내 메시지를 초기화
    }
  };

  // |이 코드는 생년월일 입력란에서 값이 변경될 때 실행되는 함수입니다. 입력된 생년월일 값을 이용하여 Date 객체를 생성하고, 현재 날짜와 비교하여 유효성을 검사합니다.
  // |
  // |좋은 점:
  // |- 입력된 생년월일 값이 유효한지 검사하여, 잘못된 값이 입력되었을 경우 안내 메시지를 설정합니다.
  // |- 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 설정하여, 다음 단계로 진행할 수 있는지 여부를 판단할 수 있습니다.
  // |
  // |나쁜 점:
  // |- 입력된 생년월일 값이 숫자가 아닐 경우와 생년도 값이 4자리가 아니거나 입력되지 않았을 경우를 구분하지 않고, 같은 안내 메시지를 설정합니다.
  // |- 입력된 생일 값이 1~31 사이의 값이 아닐 경우에 대한 안내 메시지만 설정하고, 월에 대한 검사는 하지 않습니다.
  // |
  // |따라서, 이 코드는 일부 예외 상황에 대한 처리가 미흡하며, 개선이 필요합니다.
  const birth = (e) => {
    // 생년월일 입력란에서 값이 변경될 때 실행되는 함수
    let now = new Date(); // 현재 날짜를 생성
    let nowstramp = now.getTime(); // 현재 날짜를 밀리초로 변환
    now = now.getFullYear(); // 현재 연도를 가져옴

    let bir = new Date(year, month, day); // 입력된 생년월일 값을 이용하여 Date 객체 생성
    bir = bir.getTime(); // 입력된 생년월일을 밀리초로 변환

    if (isNaN(year) || isNaN(month) || isNaN(day)) {
      // 입력된 생년월일 값이 숫자가 아닐 경우
      setBirthMessage("생년월일을 다시 확인해주세요"); // 생년월일 입력에 대한 안내 메시지를 설정
      props.setImpoVeri(false); // 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 false로 설정
    } else if (year.length !== 4 && year.length === "") {
      // 입력된 생년도 값이 4자리가 아니거나 입력되지 않았을 경우
      setBirthMessage("태어난 연도 4자리를 정확하게 입력해주세요"); // 생년월일 입력에 대한 안내 메시지를 설정
      props.setImpoVeri(false); // 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 false로 설정
    } else if (day.length === 0 && day > 31 && day < 1) {
      // 입력된 생일 값이 1~31 사이의 값이 아닐 경우
      setBirthMessage("태어난 일(날짜)을 정확하게 입력해주세요"); // 생년월일 입력에 대한 안내 메시지를 설정
      props.setImpoVeri(false); // 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 false로 설정
    } else {
      // 모든 입력값이 유효할 경우
      setBirthMessage(""); // 생년월일 입력에 대한 안내 메시지를 초기화
      props.setImpoVeri(true); // 필수 입력 항목이 모두 입력되었는지 확인하는 상태값을 true로 설정
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
  );
}

export default Impo
