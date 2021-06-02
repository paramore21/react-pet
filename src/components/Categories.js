import {useState, useEffect} from "react"
function Categories({categorieHandler}) {

  const emojis = [
    {'emoji': '🍎',
      'categorie': 'Фрукты'
    }, 
    {'emoji': '🍅',
    'categorie': 'Овощи'
    }, 
    {'emoji': '🥬',
    'categorie': 'Зелень'}, 
    {'emoji': '🍞',
    'categorie': 'Хлеб'},
    {'emoji':  '🧇',
    'categorie': 'Выпечка'}, 
    {'emoji': '🥚',
    'categorie': 'Яйца'}, 
    {'emoji': '🧀',
    'categorie': 'Сыр/творог'}, 
    {'emoji': '🥓',
    'categorie': 'Колбаса/сосиски'}, 
    {'emoji': '🥩',
    'categorie': 'Мясо'},
    {'emoji': '🥫',
    'categorie': 'Консервы'}, 
    {'emoji': '🦞',
    'categorie': 'Рыба/морепродукты'},
    {'emoji': '🍬',
    'categorie': 'Сладости'},
    {'emoji':  '🧂',
    'categorie': 'Специи'}, 
    {'emoji': '🧈',
    'categorie': 'Масло'}, 
    {'emoji': '🥤',
    'categorie': 'Напитки'}, 
    {'emoji': '🧃',
    'categorie': 'Крупы/завтраки'},
    {'emoji': '🥛',
    'categorie': 'Молоко/кефир'},
    {'emoji': '☕️',
    'categorie': 'Чай/кофе'}, 
    {'emoji': '🍺',
    'categorie': 'Алкоголь'}, 
    {'emoji': '🍶',
    'categorie': 'Мука/макароны'},
    {'emoji': '🍴',
    'categorie': 'Прочее'},
    {'emoji': '🍽️',
    'categorie': 'Кухня'}, 
    {'emoji': '🛒',
    'categorie': 'Корзина'}, 
    {'emoji': '🛁',
    'categorie': 'Ванна'}, 
    {'emoji': '🚽',
    'categorie': 'Туалет'},
    {'emoji': '💄',
    'categorie': 'Уход'},
    {'emoji': '🧹',
    'categorie': 'Хоз.Принадлежности'},
    {'emoji': '🧴',
    'categorie': 'Красота'},
    {'emoji': '🧽',
    'categorie': 'Губки/тряпки'},
    {'emoji': '🧼',
    'categorie': 'Мыло/моющие'},
    {'emoji': '🧺',
    'categorie': 'Стирка/уборка'}
  ]
  return (
    <div className="categories">
      <ul className="categoriesList">
        {emojis.map((item, i) => {
          return (
            <li className="categorieItem" key={i} onClick={categorieHandler}>
              <button className="categorieButton" type="button">{item.emoji}</button>
              <p className="categorieName">{item.categorie}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Categories