import React, { useState } from 'react';
import styled from "styled-components";
import ContentItem from "./ContentItem";
function ProjectContent() {
  const projectList=[
//     {id:"011",
//     LinkName :"project01",
//   SkillText:["html","css","js","jquery","thymeleaf"],
//   Position:"Web Publisher",
//   Title:"Tari World",
//   ItemDate:"2022.08 ~ 2023.08",
//   MyWork:["페이지 제작 & 유지 보수","페이지 연결, 애니메이션"],
//   pageLink:"https://tari.world/page/index",
//   CodeBtn:false
// }, {id:"021",
//   LinkName :"project02",
// SkillText:["html","css","js","jquery","thymeleaf"],
// Position:"FrontEnd & Web Publisher",
// Title:"SeoulMusicaWards",
// ItemDate:"2023.10 ~ 2023.11",
// MyWork:["언어 변경 시스템 적용","투표 정보 관련 JSON 생성 후 적용","투표 결과 순위 적용"],
// pageLink:"https://seoulmusicawards.com/page/index",
// CodeBtn:false
// }, {id:"031",
// LinkName :"project03",
// SkillText:["html","css","js","jquery","thymeleaf"],
// Position:"FrontEnd & Web Publisher",
// Title:"K-POP SEOUL",
// ItemDate:"2023.10 ~ 2023.12",
// MyWork:["실시간 투표 결과 적용","로딩 애니메이션 추가"],
// pageLink:"https://korea.seoulmusicawards.kr/page/index?lang=ko&platform=k&mode=pc",
// CodeBtn:false
// }, {id:"041",
// LinkName :"project01",
// SkillText:["html","css","js","jquery","thymeleaf"],
// Position:"FrontEnd & Web Publisher",
// Title:"Tari Market",
// ItemDate:"2023.11 ~ 2023.12",
// MyWork:["프로필 정보(프로필 사진 또는 닉네임)를 변경","제품 등록 또는 수정"],
// pageLink:"https://v2.tarimarket.io/page/index",
// CodeBtn:false
// },
{
  id:"03",
  LinkName :"project13",
SkillText:["html","css","js","react","styled-components","node"],
Position:"FrontEnd & Web Publisher",
Title:"soyeon-portfolio",
ItemDate:"2023.12 ~ 2024.01",
MyWork:["html 마크업","css 스타일링"],
pageLink:"https://josoyean.github.io/soyeon-portfolio",
CodeBtn:true,
codeLink:"https://github.com/josoyean/soyeon-portfolio"
},{
  id:"02",
  LinkName :"project12",
SkillText:["html","css","js","react","styled-components","node"],
Position:"FrontEnd & Web Publisher",
Title:"TVING",
ItemDate:"2023.08 ~ 2023.12",
MyWork:["html 마크업","css 스타일링"],
pageLink:"https://josoyean.github.io/tving",
CodeBtn:true,
codeLink:"https://github.com/josoyean/tving"
},
    { id:"01",
      LinkName :"project11",
    SkillText:["html","css","js","react","styled-components","node"],
    Position:"Web Publisher",
    Title:"날씨 알림이",
    ItemDate:"2023.06 ~ 2023.10",
    MyWork:["html 마크업","css 스타일링"],
    pageLink:"https://josoyean.github.io/weather-alert",
    CodeBtn:true,
    codeLink:"https://github.com/josoyean/weather-alert"
  }
  ];
  const [isProfileSelect, setIsProfileSelect] = useState(false);
  const handleClick = (idx) => {
    const newArr = Array(projectList.length).fill(false);
    if(isProfileSelect[idx] === false){
      newArr[idx] = true;
    }
    setIsProfileSelect(newArr);
  };
  return (
    <div className="center" id='project-lable'>
          <ProfileText>PROJECTS</ProfileText>
          <div className="profile-box projects-box">
            {
              projectList.map((item,index)=>{
                  return <ContentItem selectItem={isProfileSelect[index]} handleClick={handleClick} key={item.id} elementIndex={index}  LinkName={item.LinkName} SkillText={item.SkillText} Title={item.Title} Position={item.Position} MyWork={item.MyWork} ItemDate={item.ItemDate} pageLink={item.pageLink} CodeBtn={item.CodeBtn} codeLink={item.codeLink}> </ContentItem>
                 })
            }

    </div>
    </div>
  )
}

export default ProjectContent
const ProfileText = styled.span`
  color: #101010;
  font-size: 30px;
  display: block;
  text-align: center;
  font-weight: 500;
`;