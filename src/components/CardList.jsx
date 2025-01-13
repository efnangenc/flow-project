import React, { useContext } from "react";
import Card from "./Card";
import DataContext from "../context/DataContext";

const CardList = () => {
  const {
    flowers,
    selectedCategory
  } = useContext(DataContext);
  return (
    <div className="card-list">
      {flowers.map(
        (item) =>
          !item.isDeleted &&
          (item.turu === selectedCategory || selectedCategory === "Tümü") && (
            <Card
              key={item.id}
              item={item}
            />
          )
      )}
    </div>
  );
};

export default CardList;
