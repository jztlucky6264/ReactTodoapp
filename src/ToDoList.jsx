import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const ToDoList = (props) => {
  const [line, setLine] = useState(false);
  const cross = () => {
    setLine(true);
  };
  return (
    <>
      <div className="todolist">
        <DeleteIcon
          className="delet"
          onClick={cross}
          onDoubleClick={() => {
            props.onSelect(props.id);
          }}
        >
          {" "}
        </DeleteIcon>
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {props.text}
        </li>
      </div>
    </>
  );
};
export default ToDoList;
