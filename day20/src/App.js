import React, {useState} from "react";
import "./App.css";

function Card({title, calories, setGrocery, id, grocery}){
  const handleTodoDelete = () => {
    var list = grocery.filter((food, index)=> {
      return (index!==id)
    
    })
    setGrocery(list)
    console.log(list)
  }
  return (
    <div className="card">
      <h2>{title || "Title"}
      <button onClick={handleTodoDelete}>Delete</button>
      </h2>
      
      <p>you have consumed <span className="cal">{calories || "56"}</span> cals today</p>
    </div>
  )
}

function Todo({grocery, setGrocery}){
  return (
    <div className="todo">
      <h1>Calories Read only</h1>
      <div className="container">
        {grocery.map((food, index)=>{
          return <Card title={food[0]} calories={food[1]} key={index} setGrocery={setGrocery} id={index} grocery={grocery}/>
        })}
      </div>
    </div>
  )
}
const foodItem = [
  ["Pizza", 56],
  ["Burger", 66],
  ["Coke", 500],
  ["Browne", 180],
  ["Fried Rice", 90],
  ["Lassania", 200],
  ["Pani Puri", 40],
  ["Burger", 500],
  ["Noodles", 188],
  ["Samosa", 250],
]

function App(){
  const [grocery, setGrocery] = useState(foodItem) 
  return (
    <div>
      <h1 id="first">Instructions</h1>
        <ul className="list">
          <li>pass value and setter of the state to the component as props</li>
        </ul>
      <Todo grocery={grocery} setGrocery={setGrocery}/>

    </div>
  )
}

export default App;