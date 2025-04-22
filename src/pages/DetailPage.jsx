import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
import "../assets/styles/detailPage.scss";

const DetailPage = () => {
  const parametre = useParams();
  const postIndex = parametre.cardId;
  const { state, getSingleFlower } = useContext(DataContext);
  const { detail } = state;

  useEffect(() => {
    getSingleFlower(postIndex);
  });
  return (
    
    <div className="detail-page">
       <div className="background">
        <img
          src="https://i.pinimg.com/736x/3f/2f/82/3f2f82e9757694192f49d05a46d79b8d.jpg"
          alt="Background"
        />
      </div>
      <div className="detail-container">
          <h1 className="baslik">{detail.bitkiAdi}</h1>
        <div className="fotoContainer">
          <p>{detail.aciklama}</p>
          <img
            className="flower-image"
            src={detail.foto}
            alt={detail.bitkiAdi}
          />
        </div>
        <div className="flower-info">
          {/* <div className="blurr">
            <h1>{detail.bitkiAdi}</h1>
          </div> */}
         <p>
            <strong>Türü:</strong> {detail.turu}
          </p>
          <p>
            <strong>Anlamı:</strong> {detail.anlami}
          </p>
          <p>
            <strong>Yetiştiği İklim:</strong> {detail.iklim}
          </p>
          <p>
            <strong>Açıklama:</strong> {detail.aciklama}
          </p>
        </div>
        <div className="fotoAlan">
          <img
            className="flower-image-2"
            src={detail.foto}
            alt={detail.bitkiAdi}
          />
        </div>
          <div className="block">
          <h1 className="h1">{detail.latinBitkiAdi}</h1>
          <p>{detail.latinBitkiAdi} & {detail.latinBitkiAdi}</p>
          </div>
      </div>
      <button className="back-button">
        <Link to="/home">Geri</Link>
      </button>
    </div>
  );
};
export default DetailPage;
