import React from "react";
import styled from "styled-components";

function PopupContent({ item, closeClick, elementIndex, pageBtn, introduce }) {
  const DemoLink = (link, e) => {
    e.preventDefault();
    window.open(link, "_blank");
  };
  return (
    <Popup className="popup">
      <div className="content">
        <div className="btn-box">
          {pageBtn ? (
            <button
              onClick={(e) => {
                DemoLink(`${item.pageLink}`, e);
              }}
            >
              Page Open
            </button>
          ) : (
            ""
          )}

          <button
            onClick={(e) => {
              DemoLink(`${item.codeLink}`, e);
            }}
          >
            Git Open
          </button>
          <button
            className="close"
            onClick={(e) => closeClick(elementIndex, e)}
          >
            X
          </button>
        </div>
        <div className="main">
          <Introduce className="">
            <span className="">{introduce}</span>
          </Introduce>
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
                return <em key={index}>{itemText} </em>;
              })}
            </span>
            <span className="skillText">
              SKILLS :
              {item.SkillText.map((items, index) => {
                return <em key={index}>{"#" + items} </em>;
              })}
            </span>
          </div>
        </div>
        <div className="sub">
          <span>구현 기능</span>
          <ul className="job-box">
            {item.part.map((items, index) => {
              return <li key={index}>{items} </li>;
            })}
          </ul>
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

const Introduce = styled.div`
  /* padding-top: 20px; */
  box-sizing: border-box;
  /* border-top: 1px solid #aaaaaa; */
  & span {
    font-size: 1rem;
    color: #828282;
  }
`;
