import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import Swal from "sweetalert2";
import { initialState, reducer } from "../reducer/reducer";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedFlower, flowers } = state;

  const getFlowers = async () => {
    const url = "http://localhost:3010/flowers";
    const response = await fetch(url);
    const flo = await response.json();
    // console.log(gods);
    dispatch({ type: "getFlowers", payload: flo });
  };

  const getSingleFlower = async (id) => {
    const url = `http://localhost:3010/flowers/${id}`;
    const response = await axios.get(url);
    const flo = await response.data;
    // console.log(gods);
    dispatch({ type: "getSingleFlower", payload: flo });
  };


  const getCategories = async () => {
    const url = "http://localhost:3010/categories";
    const response = await axios.get(url);
    const categories = await response.data;
    dispatch({ type: "getCategories", payload: categories });
  };

  const AddNewFlower = async (newFlower) => {
    let url = "http://localhost:3010/flowers";

    if (!selectedFlower) {
      //Ekleme
      newFlower.id = (Number(flowers[flowers.length - 1].id) + 1).toString();
      //frontend ekleme
      dispatch({ type: "AddFlower", newFlower });
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
      dispatch({ type: "EditFlower", newFlower });

      //backend düzenleme
      url += `/${selectedFlower.id}`;
      const response2 = await axios.put(url, newFlower);
      console.log(response2);

      console.log("Düzenleniyooooo.....");
      // setSelectedFlower("");

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
      dispatch({ type: "DeleteFlower", id });
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
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Bir terslik var!!!",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddNewFlower({
      bitkiAdi: state.bitkiAdi,
      latinBitkiAdi: state.latinBitkiAdi,
      turu: state.turu,
      anlami: state.anlami,
      iklim: state.iklim,
      aciklama: state.aciklama,
      foto: state.foto,
    });
    //formReset
    dispatch({ type: "formReset" });
  }
    useEffect(() => {
      getFlowers(); //sadece bunu yazmak hatalı, sonsuz döngüye sokar
      getCategories();
      
    }, []);

    return (
      <DataContext.Provider
        value={{
          handleSubmit,
          deleteCard,
          state,
          dispatch,
          getSingleFlower
        }}
      >
        {children}
      </DataContext.Provider>
    );
  };

export default DataContext;
