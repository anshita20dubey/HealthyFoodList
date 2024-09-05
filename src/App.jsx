import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const foodItems = ['dal', 'ghee', 'roti', 'green vegetables', 'salad', 'milk'];
  return (
    <>
      <h1>Healthy Food List</h1>
      <ul className="list-group">
        {foodItems.map((item)=>(
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App