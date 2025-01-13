import React, { useEffect, useState } from "react";
import Navi from "./components/Navi";
import Form from "./components/Form";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";
import axios from "axios";

const App = () => {
  const [flowerList, setFlowerList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [search, setSearch] = useState("");
  const [selectedFlower, setSelectedFlower] = useState("");



  const getFlowers = async () => {
    const url = "http://localhost:3010/flowers";
    const response = await fetch(url);
    const flo = await response.json();
    // console.log(gods);
    setFlowerList(flo);
  };

  const getCategories = async () => {
    const url = "http://localhost:3010/categories";
    const response = await axios.get(url);
    const categories = await response.data;
    setCategories(categories);
  };
  useEffect(() => {
    getFlowers(); //sadece bunu yazmak hatalı, sonsuz döngüye sokar
    getCategories();
  }, []);

  
  const AddNewFlower = async (newFlower) => {
    let url = "http://localhost:3010/flowers";

    if (!selectedFlower) {
      //Ekleme
      newFlower.id= (Number(flowerList[flowerList.length-1].id)+1).toString();
      //frontend ekleme
      setFlowerList((prev) => [...prev, newFlower]);
      //backend ekleme
      const response = await axios.post(url, newFlower);
      console.log("yeni eklenen card", response.data);
    } else {
      //frontend düzenlmee
      newFlower.id=selectedFlower.id;
      setFlowerList((prev) => prev.map(çiçek=>{
        if(çiçek.id === selectedFlower.id){
          return{...newFlower}
        }
        else{
          return {...çiçek}
        }
      }));

      //backend düzenleme
      url+=`/${selectedFlower.id}`;
      const response2 = await axios.put(url, newFlower);
      console.log(response2);
      
      console.log("Düzenleniyooooo.....");
      setSelectedFlower("");
    }
  };

  const deleteCard = async (id) => {
    // setGodList(godList.filter(statenGelen=>statenGelen.id !== id))
   //frontend silme
   setFlowerList((prev) => prev.filter((statenGelen) => statenGelen.id !== id));
   //backend silme
   const url = `http://localhost:3010/flowers/${id}`; //!!tehlikwli
   const response = await axios.patch(url, { isDeleted: true });
   console.log("silinen card:", response.data);
  };
  return (
    <>
      <Navi />
      <Form AddNewFlower={AddNewFlower} flowers={flowerList} selectedFlower={selectedFlower}/>
      <SearchBar
        setSelectedCategory={setSelectedCategory}
        setSearch={setSearch}
        categories={categories}
      />
      <CardList
        flowers={flowerList}
        deleteCard={deleteCard}
        selectedCategory={selectedCategory}
        search={search}
        setSelectedFlower={setSelectedFlower}
      />
    </>
  );
};

export default App;
