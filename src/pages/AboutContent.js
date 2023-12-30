import React, { useEffect } from 'react';
import styled from 'styled-components';
import './Content.css';
function AboutContent() {
    useEffect (()=>{
        const content = "안녕하세요.  \n 주니어 Front-end Development \n 조소연입니다. :)";
        const text = document.querySelector(".text");
        let i = 0;
        
        function typing(){
            let txt = content[i++];
            text.innerHTML += txt=== "\n" ? "<br/>": txt;
            if (i > content.length) {
                text.textContent = "";
                i = 0;
            }
        }
        setInterval(typing, 200)
      },[]);
  return (
<div className='center'>
    <div className='about-box'>
     <div className='text-box'> <span className='text'></span> <span className='cursor'>|</span></div>
     <span className='introduce'>
안녕하세요.<br/> 1년 6개월 차 주니어 웹 프론트엔드 개발자 입니다.<br/> 나만 이해 하는 있는 코드가 아닌 남들이 보기에도 이해가 잘 되는 코드를 쓰려고 생각하고 노력합니다. <br/>근무할 때 웹 퍼블리싱 과 프론트 작업도 같이 해서 기본적으로 HTML, CSS,JS 다룰 줄 알고,<br/>
디자인도 아름다우면서 사용자의 편의성을 고려해 사용하기<br/> 편한 웹을 제작하기 위해 끊임없이 노력하는 개발자가 되겠습니다.
</span>
</div>
<div className='profile-box'>
    <ProfileText>ABOUT</ProfileText>
    <div className='img-inform'>
    <img src={process.env.PUBLIC_URL +`/images/profile.jpg`}  alt='profile' className='profile'></img>
    <ul>
        <li></li>
    </ul>
    </div>
</div>
</div>
  )
}

export default AboutContent

const ProfileText=styled.span`
    color: #101010;
    font-size: 30px;
    display: block;
    text-align: center;
    font-weight: 500;

`