import { useState } from "react";

import "./MainPage.css";

import AddComponent from "../Components/AddComponent";
import ListItems from "../Components/ListItems";

function MainPage() {
  const [listData, setListData] = useState([]);

  /*
  get data from inputs and add it into an array of items
  name and quantity represent the name and quantity of the item added
  */
  function insertItemInList(name, quantity) {
    let newObjArr = [...listData];
    const newObj = { name, quantity: quantity, completed: false };
    newObjArr.push(newObj);
    setListData(newObjArr);
  }

  /*
  set item's as completed or uncompleted
  completed is the state and object represents the item that needs to be changed
  */
  function setCompletedState(completed, object) {
    let newObjArr = [...listData];
    newObjArr.forEach((element) => {
      if (element === object) {
        element.completed = completed;
        setListData(newObjArr);
      }
    });
  }

  /*
  modify item quantity
  quantity is the new quantity, object is the item that needs changed
  */
  function setQuantityState(quantity, object) {
    let newObjArr = [...listData];
    newObjArr.forEach((element) => {
      if (element === object) {
        element.quantity = quantity;
        setListData(newObjArr);
      }
    });
  }

  return (
    <>

      <div>
      <header className="header">
        <p className="header">CUMPARATURI</p>
      </header>
        <div className="main_div">
          <AddComponent insertItemInList={insertItemInList} />
          <ListItems
            objectArray={listData}
            completed={false}
            setCompletedState={setCompletedState}
            setQuantityState={setQuantityState}
          />
          <ListItems
            objectArray={listData}
            completed={true}
            setCompletedState={setCompletedState}
            setQuantityState={setQuantityState}
          />
        </div>
        <footer className="footer">
        <p className="footer">&#169; 2023 Gheorghe Cosmin-Emilian</p>
      </footer>
      </div>
    </>
  );
}

export default MainPage;
