import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [flowers, setFlowerList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [search, setSearch] = useState("");
  const [selectedFlower, setSelectedFlower] = useState("");

  const [bitkiAdi, setBitkiAdi] = useState("");
  const [latinBitkiAdi, setLatinBitkiAdi] = useState("");
  const [turu, setTuru] = useState("");
  const [anlami, setAnlami] = useState("");
  const [iklim, setIklim] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [foto, setFoto] = useState("");

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

  const AddNewFlower = async (newFlower) => {
    let url = "http://localhost:3010/flowers";

    if (!selectedFlower) {
      //Ekleme
      newFlower.id = (Number(flowers[flowers.length - 1].id) + 1).toString();
      //frontend ekleme
      setFlowerList((prev) => [...prev, newFlower]);
      //backend ekleme
      const response = await axios.post(url, newFlower);
      console.log("yeni eklenen card", response.data);

      //Toast Message
      Swal.fire({
        title: "Good job!",
        text: "Ekleme başarılı!!!",
        icon: "success",
      });
    } else {
      //frontend düzenlmee
      newFlower.id = selectedFlower.id;
      setFlowerList((prev) =>
        prev.map((çiçek) => {
          if (çiçek.id === selectedFlower.id) {
            return { ...newFlower };
          } else {
            return { ...çiçek };
          }
        })
      );

      //backend düzenleme
      url += `/${selectedFlower.id}`;
      const response2 = await axios.put(url, newFlower);
      console.log(response2);

      console.log("Düzenleniyooooo.....");
      setSelectedFlower("");

      //Toast Message
      Swal.fire({
        title: "Güncelleme başarılı!!!",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://media.tenor.com/rI_0O_9AJ5sAAAAj/nyan-cat-poptart-cat.gif")
            left top
            no-repeat
          `,
      });
    }
  };

  const deleteCard = async (id) => {
    const confirmation = Swal.fire({
      title: "Are you sure?",
      text: "Geri dönüşü yok!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if ((await confirmation).isConfirmed) {
      // setGodList(godList.filter(statenGelen=>statenGelen.id !== id))
      //frontend silme
      setFlowerList((prev) =>
        prev.filter((statenGelen) => statenGelen.id !== id)
      );
      //backend silme
      const url = `http://localhost:3010/flowers/${id}`; //!!tehlikwli
      const response = await axios.patch(url, { isDeleted: true });
      console.log("silinen card:", response.data);

      //Toast Message

      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Silindi!!!",
          icon: "success",
        });
      }
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Bir terslik var!!!"
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddNewFlower({
      bitkiAdi: bitkiAdi,
      latinBitkiAdi: latinBitkiAdi,
      turu: turu,
      anlami: anlami,
      iklim: iklim,
      aciklama: aciklama,
      foto: foto,
    });
    //formReset
    setBitkiAdi("");
    setLatinBitkiAdi("");
    setTuru("");
    setAnlami("");
    setIklim("");
    setAciklama("");
    setFoto("");
  };

  useEffect(() => {
    getFlowers(); //sadece bunu yazmak hatalı, sonsuz döngüye sokar
    getCategories();
  }, []);

  useEffect(() => {
    if (selectedFlower) {
      setBitkiAdi(selectedFlower.bitkiAdi);
      setLatinBitkiAdi(selectedFlower.latinBitkiAdi);
      setTuru(selectedFlower.turu);
      setAnlami(selectedFlower.anlami);
      setIklim(selectedFlower.iklim);
      setAciklama(selectedFlower.aciklama);
      setFoto(selectedFlower.foto);
    }
  }, [selectedFlower]);

  return (
    <DataContext.Provider
      value={{
        setSelectedCategory,
        setSearch,
        categories, //searchbar
        handleSubmit, //Form
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
        flowers, //cardlist
        deleteCard,
        selectedCategory,
        search,
        setSelectedFlower, //card
        selectedFlower,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext; ///oluştuutlanı dışşrı çıkar
