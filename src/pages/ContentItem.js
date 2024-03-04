import React from "react";
import styled from "styled-components";
import PopupContent from "./PopupContent";
function ContentItem({
  handleClick,
  elementIndex,
  selectItem,
  LinkName,
  item,
  closeClick,
  pageBtn,
  introduce,
}) {
  const DemoLink = (link, e) => {
    e.preventDefault();
    window.open(link, "_blank");
  };

  const CodeLink = (link, e) => {
    e.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <div className="project-box" onClick={(e) => handleClick(elementIndex, e)}>
      <img
        src={process.env.PUBLIC_URL + `/images/` + LinkName + `.png`}
        alt="html"
      ></img>
      {selectItem && (
        <PopupContent
          item={item}
          introduce={introduce}
          pageBtn={pageBtn}
          key={elementIndex}
          closeClick={closeClick}
          elementIndex={elementIndex}
        ></PopupContent>
      )}
    </div>
  );
}

export default ContentItem;

const ItemTitle = styled.span`
  color: #f2b3dc;
  font-size: 20px;
  display: block;
  font-weight: 500;
`;
