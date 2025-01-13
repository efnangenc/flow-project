import React, { useContext } from "react";
import "../assets/styles/form.scss";
import DataContext from "../context/DataContext";
const Form = () => {
  const {
    selectedFlower,
    handleSubmit,
    bitkiAdi,
    latinBitkiAdi,
    turu,
    anlami,
    iklim,
    aciklama,
    foto,
    setBitkiAdi,
    setLatinBitkiAdi,
    setTuru,
    setAnlami,
    setIklim,
    setAciklama,
    setFoto,
  } = useContext(DataContext);

  return (
    <div className="allForm">
      <div className="background">
        <img
          src="https://i.pinimg.com/736x/3f/2f/82/3f2f82e9757694192f49d05a46d79b8d.jpg"
          alt="Background"
        />
      </div>
      <div  className="parent">
        <div className="div1">
          <div>
            <img src="" />
          </div>
          <p className="font">FLOWW</p>
          <p className="font2">Botanik kayıt sistemi: Ekleyin, düzenleyin, güncelleyin, yönetin... </p>
          <p className="font4">
            React ile modern <strong>CRUD</strong> çözümleri.
          </p>
        </div>
        <div className="div2"></div>
        <div className="div3">
          <div className="form-container">
            <form onSubmit={handleSubmit} id="registerForm">
              <div className="form-group">
                <input
                  value={bitkiAdi}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Bitki Adı"
                  onChange={(e) => setBitkiAdi(e.target.value)}
                />
              </div>
              <div className="form-group">
                {/* <!-- <label for="latinName">Latince adı</label> --> */}
                <input
                  value={latinBitkiAdi}
                  type="text"
                  id="latinName"
                  name="latinName"
                  placeholder="Latince Adı"
                  onChange={(e) => setLatinBitkiAdi(e.target.value)}
                />
              </div>
              <div className="form-group">
                {/* <!-- <label for="type">Türü</label> --> */}
                <select
                  value={turu}
                  onChange={(e) => setTuru(e.target.value)}
                >
                  <option>Seçiniz</option>
                  <option>Çok yıllık bitki</option>
                  <option>Su bitkisi</option>
                  <option>Meyve</option>
                  <option>Soğanlı bitki</option>
                  <option>Ağaç</option>
                  <option>Çalı</option>
                  <option>Diğer</option>
                </select>
              </div>
              <div className="form-group">
                {/* <!-- <label for="meaning">Anlamı </label> --> */}
                <input
                  value={anlami}
                  type="text"
                  id="meaning"
                  name="meaning"
                  placeholder="Anlamı"
                  onChange={(e) => setAnlami(e.target.value)}
                />
              </div>
              <div className="form-group">
                {/* <!-- <label for="climate">İklim Tercihi</label> --> */}
                <input
                  value={iklim}
                  type="text"
                  id="climate"
                  name="climate"
                  placeholder="Yetiştiği İklim"
                  onChange={(e) => setIklim(e.target.value)}
                />
              </div>
              <div className="form-group">
                {/* <!-- <label for="description">Açıklama</label> --> */}
                <input
                  value={aciklama}
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Açıklama"
                  onChange={(e) => setAciklama(e.target.value)}
                />
              </div>
              <div className="form-group">
                {/* <!-- <label for="description">Açıklama</label> --> */}
                <input
                  value={foto}
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Foto"
                  onChange={(e) => setFoto(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  disabled={
                    bitkiAdi === "" ||
                    latinBitkiAdi === "" ||
                    turu === "" ||
                    anlami === "" ||
                    iklim === "" ||
                    aciklama === ""
                  }
                  className="button"
                  type="submit"
                  value={selectedFlower ? "Düzenle" : "Ekle"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
