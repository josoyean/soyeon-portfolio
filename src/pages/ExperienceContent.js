import React, { useState } from "react";
import styled from "styled-components";
function ExperienceContent() {
  const experienceList = [
    {
      id: "011",
      LinkName: "project01",
      SkillText: ["html", "css", "js", "jquery", "thymeleaf"],
      Position: "Web Publisher",
      Title: "Tari World",
      ItemDate: "2022.08 ~ 2023.08",
      MyWork: ["페이지 제작 & 유지 보수", "페이지 연결, 애니메이션"],
      pageLink: "https://tari.world/page/index",
      CodeBtn: false,
    },
  ];
  const [isProfileSelect, setIsProfileSelect] = useState(false);
  const handleClick = (idx) => {
    const newArr = Array(experienceList.length).fill(false);
    if (isProfileSelect[idx] === false) {
      newArr[idx] = true;
    }

    setIsProfileSelect(newArr);
  };

  const DemoLink  = (link,e) =>{
    e.preventDefault();
    window.open(link, '_blank');
}

  return (
    <div className="center" id="experience-lable">
      <ProfileText>
        EXPERIENCE <em>총 1년 6개월</em>
      </ProfileText>
      <div className="profile-box experience-box">
        <div className="item-box">
          <span className="date">
            2022.07 ~ 2023.12<em>1년 6개월</em>
          </span>
          <span className="name">너울 소프트</span>
          <span className="position">웹 퍼블리셔 & 프론트엔드</span>
          <div className="list-box">
            <div className="list">
            <span className="title">Tari Market     <button onClick={ (e) => {DemoLink("https://v2.tarimarket.io/page/index?lang=en&mode=null",e)}}>Demo</button></span>
            <span className="date">23.11 ~ 23.12</span>
            <ul>
            <li>로그인 유뮤 확인 후 다른 페이지 오픈</li>
            <li>닉네임,프로필 사진 등등 개인 정보 및 제품 등록 변경, 저장</li>
            <li>로딩 페이지 추가 해서 사용자 혼란 최소화</li>
          </ul>
          <span className="skill"> #html #css #js #jquery #thymeleaf</span>
            </div>
         
             <div className="list">
            <span className="title">K-POP SEOUL  <button onClick={ (e) => {DemoLink("https://korea.seoulmusicawards.kr/page/index?lang=ko&platform=k&mode=pc",e)}}>Demo</button></span>
            <span className="date">2023.10 ~ 2023.12</span>
            <ul>
            <li>설정한 시간과 현재 시간 비교 후 공지 팝업 오픈</li>
            <li>접속 언어 확인 후 설정되어 있는 번역 문장 보여줌</li>
            <li>로딩 페이지 추가 해서 사용자 혼란 최소화</li>
            <li>실시간 투표 결과 적용</li>
          </ul>
          <span className="skill"> #html #css #js #jquery #thymeleaf</span>
          </div> 
            <div className="list">
            <span className="title">SeoulMusicaWards  <button onClick={ (e) => {DemoLink("https://seoulmusicawards.com/page/index",e)}}>Demo</button></span>
            <span className="date">2023.10 ~ 2023.11</span>
            <ul>
            <li>접속 언어 확인 후 설정되어 있는 번역 문장 보여줌</li>
            <li>투표 결과 상위권만 보여줌</li>
            <li>투표 데이터 JSON파일 이용해서 설정</li>
          </ul>
          <span className="skill"> #html #css #js #jquery #thymeleaf</span>
            </div>
            <div className="list">
            <span className="title">Tari World  <button onClick={ (e) => {DemoLink("https://tari.world/page/index",e)}}>Demo</button></span>
            <span className="date">2022.08 ~ 2023.08</span>
            <ul>
            <li>페이지 작업 & 유지 보수</li>
            <li>동영상,애니메이션 작업</li>
          </ul>
          <span className="skill"> #html #css #js #jquery #thymeleaf</span>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default ExperienceContent;

const ProfileText = styled.span`
  color: #101010;
  font-size: 1.9rem;
  display: block;
  text-align: center;
  font-weight: 500;
`;
