import { useState } from "react";
import "./AddComponent.css";

function AddComponent(props) {
  //add new item in teh list using a function passed from parrent as prop
  function addItem() {
    props.insertItemInList(name, quantity);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addItem();
    console.log("da");
  }

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <div className="addcomponent_main_div">
      <form className="flex_left" onSubmit={handleSubmit}>
        <p className="addComponent_p">Adauga elemente!</p>
        <input
          className="addComponent_input"
          type="text"
          id="nume"
          name="nume"
          placeholder="Nume"
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <input
          className="addComponent_input"
          type="number"
          id="cantitate"
          name="cantitate"
          placeholder="Cantitate"
          onChange={(e) => setQuantity(e.target.value)}
          required
        ></input>
        <button type="submit" className="add_button">
          Adauga
        </button>
      </form>
      <div className="flex_rigth"></div>
    </div>
  );
}

export default AddComponent;
