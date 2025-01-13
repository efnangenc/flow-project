import React from 'react'
import Card from './Card'

const CardList = ({flowers ,deleteCard, selectedCategory, search, setSelectedFlower}) => {
  return (
    <div className="card-list">
      {flowers.map((item) => (item.turu === selectedCategory ||
            selectedCategory === "Tümü") && (
        <Card key={item.id} item={item} deleteCard={deleteCard}  search={search}  setSelectedFlower= {setSelectedFlower}/>
      ))}
    </div>
  )
}

export default CardList