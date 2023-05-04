import "./ListItems.css";
import Item from "./Item";

function ListItems(props) {
  
  let uncompletedArray = [];
  let completedArray = [];

  //splits the items list int ocompleted an uncompleted arrays
  props.objectArray.forEach((object) => {
    if (object.completed) {
      completedArray.push(object);
    } else {
      uncompletedArray.push(object);
    }
  });

  /*
  get completed or uncompleted properties that are needed for items 
  completed is a boolean, the data is returned based on it's state
  */
  const getPropertiesDependingOnCompleted = (completed) => {
    let uncompletedProperties = {
      titleText: "de cumparat",
      getItemsListSize(){
        return uncompletedArray.length;
      },
      getItemsToDisplay(){
        return uncompletedArray.map((object, index) => 
        <Item key={index + 1} index={index + 1} object={object} completed = {props.completed} setCompletedState={props.setCompletedState} setQuantityState={props.setQuantityState}/>
      );
      }
    };
    let completedProperties = {
      titleText: "cumparate",
      getItemsListSize(){
        return completedArray.length;
      },
      getItemsToDisplay(){
        return completedArray.map((object, index) => 
        <Item key={index + 1} index={index + 1} object={object} completed = {props.completed} setCompletedState={props.setCompletedState} setQuantityState={props.setQuantityState}/>
      );
      }
    };

    if (completed) return completedProperties;
    else return uncompletedProperties;
  };

  const properties = getPropertiesDependingOnCompleted(props.completed);
  
  return (
    <div className="list_main_div">
      <p className="list_item_p">{properties.getItemsListSize()} {properties.titleText}</p>
      <div className="list_separator_div"></div>
      <div className="items_container">
        {properties.getItemsToDisplay()}
      </div>
    </div>
  );
}

export default ListItems;
