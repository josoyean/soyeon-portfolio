import React, { useState } from 'react';
import styled from 'styled-components';
import './Header.css';
function Header() {
    const [scrollMove,setScrollMove] = useState(false);
    window.addEventListener('scroll',function (event) {
    let scroll = this.window.scrollY;
     if(scroll >80){
       setScrollMove(true);
     }else{
       setScrollMove(false);
     }
    })
  return (
    <header className= {scrollMove ? "action":""}>
        <div className='center'>
        <img src={process.env.PUBLIC_URL +`/images/josoyeon.png`}  alt='logo' className='logo'></img>
        <ul>
            <ListItem>{'<About />'}</ListItem>
            <ListItem>{'<Skills />'}</ListItem>
            <ListItem>{'<Experience />'}</ListItem>
            <ListItem>{'<Projects />'}</ListItem>
            <ListItem>{'<Contect />'}</ListItem>
        </ul>
     
        </div>
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