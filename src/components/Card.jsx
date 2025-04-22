import React, { useContext } from "react";
import "../assets/styles/card.scss";
import frame from "../assets/img/360_F_527108975_ZyCntv4UKW8Gyp7pTeWFjXIDPBYW0L2x-removebg-preview.png";
import DataContext from "../context/DataContext";
import DefaultPic from "../assets/img/ce0a6371b647ef093843b13e266813b8.jpg"
import { Link } from "react-router-dom";


const Card = ({item}) => {
  const {deleteCard, state, dispatch} = useContext(DataContext);
  return (

    ((item.bitkiAdi.toLowerCase().startsWith(state.search.toLowerCase())) || (item.latinBitkiAdi.toLowerCase().startsWith(state.search.toLowerCase()))) &&


    <div id="esb" className="card-container">
      <div className="card"><Link to={`/ank18/detail/${item.id}`}>
        <img id="frame" src={frame} />
        <img  id="resim" src={item.foto? item.foto : DefaultPic} alt="profil" />
        </Link>
      </div>
        <span className="bitkiAdi">{item.bitkiAdi}</span>
      <div className="card-text">
        <span className="latinAdi">Latince adı: {item.latinBitkiAdi}</span>
        <span>Türü: {item.turu}</span>
        <span>Anlamı: {item.anlami}</span>
        <span>Yetiştiği iklim: {item.iklim}</span>
        <span>
          Açıklaması:{" "}
          {item.aciklama.substring(
            0,
            item.aciklama.substring(0, 70).lastIndexOf(" ")
          ) + "..."}
        </span>
      </div>
        <button onClick={() => deleteCard(item.id)} className="delete">
          S İ L
        </button>
        <a href="#xx" onClick={()=>dispatch({type:"selectedFlower", payload:item})} className="edit">E D İ T</a>
     
    </div>
  );
};

export default Card;
