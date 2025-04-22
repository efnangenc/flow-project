import React, { useContext } from "react";
import "../assets/styles/searchBar.scss";
import DataContext from "../context/DataContext";


const SearchBar = () => {
  const { state, dispatch} = useContext(DataContext)
  const {categories} = state;
  return (
    <div className="searchbar">
      <ul>
        {categories.map((item) => (
          <li
            onClick={(e) => dispatch({type:"selectedCategory", payload:e.target.innerText})}
            key={item.id}
          >
            {item.categoryName}{" "}
          </li>
        ))}
      </ul>
      <div className="searchbar-input">
        <input
          onChange={(e) => dispatch({type:"search", payload:e.target.value})}
          type="text"
          placeholder="Ara.."
        />
      </div>
    </div>
  );
};

export default SearchBar;
