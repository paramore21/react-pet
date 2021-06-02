
const GoodsToBuy = ({good, complete}) => {
  const handleToggle = (good) => {
    good.target.classList.toggle('done')
    good.target.parentNode.classList.toggle('divDone')
  }
  return (
    <div className='goodDiv'>
      <p className="good" onClick={handleToggle}>{good.task}</p>
      <button className="goodTrash">🗑</button>
    </div>
  )
}

export default GoodsToBuy