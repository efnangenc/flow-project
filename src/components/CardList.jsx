import React, { useContext } from "react";
import Card from "./Card";
import DataContext from "../context/DataContext";

const CardList = () => {
  const {
    state
  } = useContext(DataContext);
  return (
    <div className="card-list">
      {state.flowers.map(
        (item) =>
          !item.isDeleted &&
          (item.turu === state.selectedCategory || state.selectedCategory === "Tümü") && (
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
