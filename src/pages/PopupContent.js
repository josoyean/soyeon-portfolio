import React from "react";
import styled from "styled-components";

function PopupContent({ item }) {
  console.log(item);
  return (
    <Popup className="popup">
      <div className="content">
        <div className="main">
          <img
            src={process.env.PUBLIC_URL + `/images/` + item.LinkName + `.png`}
            alt="html"
          ></img>
          <div className="infor-box">
            <span className="date"> DATE : {item.ItemDate}</span>
            <span className="position"> POSITION : {item.Position}</span>
            <span className="mywork">
              MYWORK :
              {item.MyWork.map((items, index) => {
                let itemText = items + ",";
                if (index === item.MyWork.length - 1) {
                  itemText = items;
                }
                return <em>{itemText} </em>;
              })}
            </span>
            <span className="skillText">
              SKILLS :
              {item.SkillText.map((items) => {
                return <em>{"#" + items} </em>;
              })}
            </span>
          </div>
        </div>
      </div>
    </Popup>
  );
}

export default PopupContent;

const Popup = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999 !important;
  background-color: rgba(0, 0, 0, 0.7);
`;
