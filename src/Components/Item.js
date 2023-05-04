import "./Item.css";

function Item(props) {

    /*
  get completed or uncompleted properties that are needed for items 
  completed is a boolean, the data is returned based on it's state
  */
  const getPropertiesDependingOnCompleted = (completed) => {
    let uncompletedProperties = {
      buttonText: "MARK AS COMPLETED",
      backgroundColor: "#dc6678",
    };
    
    let completedProperties = {
      buttonText: "MARK AS UNCOMPLETED",
      backgroundColor: "gray",
    };

    if (completed) return completedProperties;
    else return uncompletedProperties;
  };

  const properties = getPropertiesDependingOnCompleted(props.completed);

  /*
  change item's completed state using function received from parrent as prop
  it is called on buton press
  */
  function buttonPressed() {
    props.setCompletedState(!props.completed, props.object);
  }

  //adds +1 to the item quantity, uses function passed as prop
  function addButtonClick() {
    props.setQuantityState(Number(props.object.quantity) + 1, props.object);
  }

  //adds -1 to the item quantity, uses function passed as prop
  function substractButtonClick() {
    props.setQuantityState(Number(props.object.quantity)  - 1, props.object);
  }

  return (
    <div className="item_main_div" style={{backgroundColor: properties.backgroundColor}}>
      <p>Name: {props.object.name}</p>
      <p>Quantity: {props.object.quantity}</p>
      <div className="div_quantity">
        <p>Modify Quantity: </p>
        <button
          className="item_add_substract_button item_add_button" 
          onClick={addButtonClick}
        >
          +
        </button>
        <button
          className="item_add_substract_button item_substract_button"
          onClick={substractButtonClick}
        >
          -
        </button>
      </div>
      <div className="item_separator_div"></div>
      <button className="mark_button" style = {{backgroundColor: properties.backgroundColor}} onClick={buttonPressed}>
        {properties.buttonText}
      </button>
    </div>
  );
}

export default Item;
