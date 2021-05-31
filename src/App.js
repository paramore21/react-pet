import GoodsToBuy from "./components/GoodsToBuy"
import ShopList from "./components/ShopList"
import {useState} from "react"

function App() {
  const [goods, setGoods] = useState([]);

  const addShop = (userInput) => {
    if(userInput){
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
      }
      setGoods([...goods, newItem])
    }
  }
  return (
    <>
      <h1>{goods.length}</h1>
      <ShopList addTask={addShop}/>
      {goods.map((good) => {
        return (
          <GoodsToBuy 
            key={good.id}
            good={good}
          />
        )
      })}
    </>
  );
}

export default App;
