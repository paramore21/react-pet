import React from "react"
import {useState, useEffect} from "react"


const ShopList = ({addTask}) => {
  const [userInput, setUserInput] = useState('')
  
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput("")
  }
  return (
    <>
      <form className="shopList" onSubmit={handleSubmit}>
        <input 
          className="shopListInput" 
          type="text" 
          placeholder="Введите покупку" 
          value={userInput} 
          onChange={handleChange} />
        <button className="shopListButton" type="button" onClick={handleSubmit}>Добавить</button>
      </form>
    </>
  )
}

export default ShopList