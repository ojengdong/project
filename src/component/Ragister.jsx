/* eslint-disable */
import React from "react";
import './Register.css'
import Footer from './footer'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import checkimg from "./images/동의 아이콘 1.png" // check
import uncheck from "./images/동의 아이콘 2.png" // uncheck
import logo from "./images/동의 아이콘 3.png" // logo
import linkimg from "./images/동의 아이콘 4.png"// link

const Ragister = (props) => {
  // 체크박스의 checkd 속성값인 true/false를 useState를 이용하여 저장 및 변경함.
  // 기능을 해당 체크 박스의 onChange 이벤트를 통해 기능 구현함.
  // useEffect 를 이용해서 기능 구현. 위에 onChange 이벤트로는 세부항목 4개가 모두 체크된 즉시 
  // 전체동의가 자동 체크되지 않으나, useEffect를 사용하면 모두 체크된 때(업데이트)를 캐치해 즉시 전체동의가 자동체크된게 된다.

  // 전체
  const [allCheck, setAllCheck] = useState(false);
  // 필수
  const [useCheck, setUseCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false)
  const [submit, setSubmit] = useState(false)

  const check = (e) => {
    if(allCheck === false,  useCheck === false, ageCheck === false) {
      e.preventDefault();
      alert("동의해주십시오")
      setAllCheck(false)
      setUseCheck(false)
      setAgeCheck(false)
    } 
    console.log(allCheck === false || useCheck === false || ageCheck === false)
  }

  const allBtnEvent = (props) => {
    if (allCheck === false) {
      setAllCheck(true);
      setUseCheck(true);
      setAgeCheck(true);
    } else {
      setAllCheck(false);
      setUseCheck(false);
      setAgeCheck(false);
    }
  };

  const useBtnEvent = (i) => {
    if (useCheck === false ) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  const ageBtnEvent = (i) => {
    if(ageCheck === false ) {
      setAgeCheck(true);
    }else {
      setAgeCheck(false);
    }
  }


  useEffect((i) => {
    if (
      useCheck === true &&
      ageCheck === true
    ) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [useCheck, ageCheck]);

  return (
    <div className="wrapper">
      <div className="logo-box">
          <h1>
            <img src={logo} alt="" />
          </h1>
        </div>
      <div className="container">
        <div className="all-check">
          {/* <input type="checkbox" onChange={allBtnEvent} checked={allCheck}/> */}
          <div className="chk-img"
          htmlFor="all" 
          style={
            allCheck == true
            ? {backgroundImage : `url(${checkimg})`}
            : {backgroundImage : `url(${uncheck})`}
          }
          onClick={()=> {
            allBtnEvent(!setAllCheck)
          }}
          checked={allCheck}
          ></div>
          <label  >
            <span onClick={()=> {
            allBtnEvent(!setAllCheck)
          }}>
              <strong >모두 동의합니다.</strong><br/>
              대전광역시 이용약관, 개인수집 및 이용,개인정보처리 업무위탁에 대한 동의에 모두 동의합니다.
            </span>
          </label>
        </div>
            <div className="check">
              
              <div className="chk">
              {/* <input type="checkbox" checked={useCheck} onChange={useBtnEvent} /> */}
                <div className="chk-img"
                htmlFor="chk1" 
                style={
                  useCheck == true
                  ? {backgroundImage : `url(${checkimg})`}
                  : {backgroundImage : `url(${uncheck})`}
                }
                onClick={()=> {
                  useBtnEvent(!setUseCheck)
                }}
                checked={useCheck}
                ></div>

              <span htmlFor="" 
              onClick={()=> {
                  useBtnEvent(!setUseCheck)
                }}>
                <h3> 홈페이지 이용약관 </h3>
                <p>필수</p>
              </span>
              </div>

              <p className="terms">
                  대전광역시 홈페이지는 개인정보보호법 등 관련 법령에 따라
                  정보주체로부터 개인정보를 수집함에 있어
                  아래 내용을 안내하고 있습니다. 정보주체가 되는 이용자께서는
                  아래 내용을 자세히 읽어보시고,
                  모든 내용을 이해하신 후에 동의 여부를 결정하여 주시기
                  바랍니다.
                  대전광역시 홈페이지는 개인정보보호법 등 관련 법령에 따라
                  정보주체로부터 개인정보를 수집함에 있어
                  아래 내용을 안내하고 있습니다. 정보주체가 되는 이용자께서는
                  아래 내용을 자세히 읽어보시고, 
                  모든 내용을 이해하신 후에 동의 여부를 결정하여 주시기
                  바랍니다.
                  대전광역시 홈페이지는 개인정보보호법 등 관련 법령에 따라
                  정보주체로부터 개인정보를 수집함에 있어 
                  아래 내용을 안내하고 있습니다. 정보주체가 되는 이용자께서는
                  아래 내용을 자세히 읽어보시고, 
                  모든 내용을 이해하신 후에 동의 여부를 결정하여 주시기
                  바랍니다.
                </p>

              <span className="red-text">동의 해야만 회원가입 가능</span>

                <div className="chk">

              {/* <input type="checkbox" checked={ageCheck} onChange={ageBtnEvent}/> */}
              <div className="chk-img"
                style={
                  ageCheck == true
                  ? {backgroundImage : `url(${checkimg})`}
                  : {backgroundImage : `url(${uncheck})`}
                }
                onClick={()=> {
                  ageBtnEvent(!setAgeCheck)
                }}
                checked={ageCheck}
              ></div>

              <span htmlFor="" onClick={()=> {ageBtnEvent(!setAgeCheck)}}>
                <h3> 개인정보 수집 및 이용</h3>
                <p>필수</p>
              </span>
              </div>

              <p className="terms">
                  대전광역시 홈페이지는 개인정보보호법 등 관련 법령에 따라
                  정보주체로부터 개인정보를 수집함에 있어
                  아래 내용을 안내하고 있습니다. 정보주체가 되는 이용자께서는
                  아래 내용을 자세히 읽어보시고,
                  모든 내용을 이해하신 후에 동의 여부를 결정하여 주시기
                  바랍니다.
                  대전광역시 홈페이지는 개인정보보호법 등 관련 법령에 따라
                  정보주체로부터 개인정보를 수집함에 있어 
                  아래 내용을 안내하고 있습니다. 정보주체가 되는 이용자께서는
                  아래 내용을 자세히 읽어보시고, 
                  모든 내용을 이해하신 후에 동의 여부를 결정하여 주시기
                  바랍니다.
                  대전광역시 홈페이지는 개인정보보호법 등 관련 법령에 따라
                  정보주체로부터 개인정보를 수집함에 있어 
                  아래 내용을 안내하고 있습니다. 정보주체가 되는 이용자께서는
                  아래 내용을 자세히 읽어보시고,
                  모든 내용을 이해하신 후에 동의 여부를 결정하여 주시기
                  바랍니다.
              </p>

              <span className="red-text">동의 해야만 회원가입 가능</span>
            </div>
        </div>

        <div className="table-box">
          <strong>개인정보 업무위탁 안내</strong>
          <div>
            <p>대전광역시는 대전광역시홈페이지의 유지관리를 위하여 아래와 같이 개인정보처리 업무를 위탁합니다.</p>
            
            <table>
              <tbody>
              <tr>
              <th>취급을 위탁 받는자(수탁업체)</th>
              <th>업무내용</th>
              </tr>
              
              <tr>
                <td>디더블유오공삼(주)</td>
                <td>홈페이지 기능개선유지</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="corporation">
          <strong>법인회원</strong>
          <div className="corporation-box">
            <p>대전예술의 전당, 연정국악원에 한하여 법인회원 가입이 가능하며.
              <br/>
              이용하려는 기관에 각각 가입하시기 바랍니다.
            </p>
            <div className="agency-box">
            <label htmlFor="" className="agency">
              <span>대전 예술의 전당 가입안네</span>
              <Link to={'https://www.daejeon.go.kr/djac/index.do'} target={"_blank"}>
                <img src={linkimg} alt="" />
              </Link>
            </label>
            <label htmlFor="" className="agency">
            <span>연정 국악원 가입안내</span>
              <Link to={'https://www.daejeon.go.kr/kmusic/'} target={"_blank"}>
                <img src={linkimg} alt="" />
              </Link>
            </label>
            </div>
          </div>
      
        <div className="ragister-btn-box">
          <button className="prev-btn" type="button">취소</button>

          <Link to='/Join'>
          <button className="next-btn" type="submit" onClick={check}>확인</button>
          </Link>
        </div>

        <div className="foreigner">
          <span>외국인, 재외국인께서 사용할 ID가 필요하세요? <Link className="foreigner-id">외국인 / 재외국인 회원가입</Link></span>
        </div>

        <div className="footer">
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Ragister;
