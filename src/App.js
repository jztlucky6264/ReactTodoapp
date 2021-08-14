import React, { useState } from "react";
import ToDoList from "./ToDoList";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const click = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    console.log("d");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>TODO LIST</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={inputList}
            onChange={itemEvent}
          ></input>
          <AddCircleIcon className="btn" onClick={click}>
            +
          </AddCircleIcon>
          <div className="list_div">
            <ol>
              {items.map((itemval, index) => {
                return (
                  <ToDoList
                    key={index}
                    id={index}
                    onSelect={deleteItems}
                    text={itemval}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
