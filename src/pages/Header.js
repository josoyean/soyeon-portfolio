import React from 'react';
import styled from 'styled-components';
import './Header.css';
function Header() {

  return (
    <header>
        <div className='center'>
        <img src={process.env.PUBLIC_URL +`/images/josoyeon.png`}  alt='logo' className='logo'></img>
        <ul>
            <ListItem>{'<About />'}</ListItem>
            <ListItem>{'<Skills />'}</ListItem>
            <ListItem>{'<Projects />'}</ListItem>
            <ListItem>{'<contect />'}</ListItem>
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