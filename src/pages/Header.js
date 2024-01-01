import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import './Header.css';
function Header() {
  const [lineWidth,setLineWidth] = useState(0);
  window.addEventListener('scroll',function (event) {
    let scroll = this.window.scrollY;
    var percent = (scroll / (this.document.body.offsetHeight - this.window.innerHeight)) * 100;
    setLineWidth(percent);
  })
  // console.log(content2Ref)
  const content2Ref = useRef();
  const onContent2Click = (lable,e) =>{
   
    let lableTag= document.querySelector(lable);
  
    setTimeout(function() {
      var PageLocation = lableTag.offsetTop - lableTag.scrollTop;

      window.scrollTo({top: PageLocation - 60, behavior: 'smooth'}); 
  }, 70);
    }
   
   
  return (
    <header>
        <div className='center'>
        <img src={process.env.PUBLIC_URL +`/images/josoyeon.png`}  alt='logo' className='logo'></img>
        <ul>
            <ListItem onClick={(e) => onContent2Click("#about-lable",e)}> {'<About />'}</ListItem>
            <ListItem onClick={(e) => onContent2Click("#skills-lable",e)}>{'<Skills />'}</ListItem>
            <ListItem onClick={(e) => onContent2Click("#experience-lable",e)}>{'<Experience />'}</ListItem>
            <ListItem onClick={(e) => onContent2Click("#project-lable",e)}>{'<Projects />'}</ListItem>
            <ListItem onClick={(e) => onContent2Click("#about-lable",e)}>{'<Contect />'}</ListItem>
        </ul>
     
        </div>
        <div className='line' style={{"width": lineWidth+"%"}}></div>
    </header>
  )
}

export default Header

const ListItem=styled.li`
    color: #101010;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
`