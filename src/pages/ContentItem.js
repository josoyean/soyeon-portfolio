import React, { useState } from "react";
import styled from "styled-components";
import PopupContent from "./PopupContent";
function ContentItem({
  handleClick,
  elementIndex,
  selectItem,
  LinkName,
  item,
}) {
  const [projectAction, setProjectAction] = useState(false);
  const DemoLink = (link, e) => {
    e.preventDefault();
    window.open(link, "_blank");
  };
  const CodeLink = (link, e) => {
    e.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <div className="project-box" onClick={() => handleClick(elementIndex)}>
      <img
        src={process.env.PUBLIC_URL + `/images/` + LinkName + `.png`}
        alt="html"
      ></img>
      {selectItem && <PopupContent item={item}></PopupContent>}
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
