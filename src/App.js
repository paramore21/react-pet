import GoodsToBuy from "./components/GoodsToBuy"
import ShopList from "./components/ShopList"
import Categories from './components/Categories'
import {useState} from "react"
import ls from 'local-storage'

function App() {
  const [goods, setGoods] = useState([]);
  const componentDidMount = () => { 
    console.log(ls.get('item'))
    ls.get('id')
    ls.get('task')
    ls.get('complete')
  }
  const addShop = (userInput) => {
    if(userInput){
      const newItem = {
        id: Math.floor(Math.random()*100),
        task: userInput,
        complete: false
      }
      setGoods([...goods, newItem])
      ls.set('item', `{id: ${newItem.id}, task: ${newItem.task}, complete: ${newItem.complete}}`)
      ls.set('task', `${newItem.task}`)
      ls.set('complete', `${newItem.complete}`)
    }
  }

  const categorieHandler = () => {
    
  }
  componentDidMount()
  return (
    <div className="App">
      <Categories categorieHandler={categorieHandler}/>
      <ShopList addTask={addShop}/>
      <div className="goods">
        {goods.map((good) => {
          return (
            <GoodsToBuy 
              key={good.id}
              good={good}
              complete={good.complete}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
