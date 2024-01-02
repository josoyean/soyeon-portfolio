import React, { useState } from 'react';
import styled from "styled-components";
function ContentItem({handleClick,elementIndex,selectItem,LinkName,Title,Position,ItemDate,pageLink,MyWork,SkillText,CodeBtn,codeLink}) {
  const [projectAction,setProjectAction] = useState(false); 
  const DemoLink  = (link,e) =>{
        e.preventDefault();
        window.open(link, '_blank');
    }
    const CodeLink  = (link,e) =>{
        e.preventDefault();
        window.open(link, '_blank');
    }

  //console.log("selectItem",selectItem);

  return (
    <div className =  {`project-box ${selectItem?" action":''}`}  onClick={()=> handleClick(elementIndex)}>
         <img src={process.env.PUBLIC_URL + `/images/`+LinkName+`.png`} alt="html" ></img>
         <div className='item'>
            <div className='title-btn'>
<ItemTitle>{Title}</ItemTitle>
            </div>
            <div className='inform-box'>
            <span className='date-text'>DATE : {ItemDate}</span>
            <span className='position-text'>POSITION : {Position}</span>
            <span className='mywork-text'>MYWORK : {
                MyWork.map((item,index)=>{
                  return  <em key={index}>{item}{MyWork.length <=index+1 ? " ":", " }</em>
                })
            }</span>
             <span className='skill-text'>SKILL : {
                SkillText.map((item,index)=>{
                  return  <em key={item}>{"#"+item +" "}</em>
                })
            }</span>
            </div>
            <div className='btn-box'>
    <button onClick={ (e) => {DemoLink(pageLink,e)}}>Demo</button>
    {CodeBtn?  <button onClick={ (e) => {CodeLink(codeLink,e)}}>Source Code</button> :""}
</div>
         </div>
    </div>
  )
}

export default ContentItem

const ItemTitle = styled.span`
  color:#F2B3DC;
  font-size: 20px;
  display: block;
  font-weight: 500;
`;