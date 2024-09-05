import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const foodItems = ['dal', 'ghee', 'roti', 'green vegetables', 'salad', 'milk'];
  // const foodItems = [];
  // if(foodItems.length === 0) {
  //   return <h3>I'm still hungry</h3>
  // }
  // const emptyMessage = foodItems.length === 0 ? <h3>I'm still hungry</h3> : null
  return (
    <>
      <h1>Healthy Food List</h1>
      {/* {foodItems.length === 0 ? <h3>I'm still hungry</h3> : null} */}
      {/* {emptyMessage} */}
      {foodItems.length === 0 && <h3>I'm still hungry</h3>}
      <ul className="list-group">
        {foodItems.map((item)=>(
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App