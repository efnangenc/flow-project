export const initialState = {
  flowers: [],
  categories: [],
  selectedCategory: "Tümü",
  search: "",
  selectedFlower: "",
  bitkiAdi: "",
  latinBitkiAdi: "",
  turu: "",
  anlami: "",
  iklim: "",
  aciklama: "",
  foto: "",
  detail: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "getFlowers":
      return {
        ...state,
        flowers: action.payload,
      };
    case "getSingleFlower":
      return {
        ...state,
        detail: action.payload,
      };
    case "getCategories":
      return {
        ...state,
        categories: action.payload,
      };
    case "formReset":
      return {
        ...state,
        bitkiAdi: "",
        latinBitkiAdi: "",
        turu: "",
        anlami: "",
        iklim: "",
        aciklama: "",
        foto: "",
      };
    case "BitkiAdi":
      return {
        ...state,
        bitkiAdi: action.payload,
      };
    case "LatinBitkiAdi":
      return {
        ...state,
        latinBitkiAdi: action.payload,
      };
    case "Turu":
      return {
        ...state,
        turu: action.payload,
      };
    case "Anlami":
      return {
        ...state,
        anlami: action.payload,
      };
    case "Iklim":
      return {
        ...state,
        iklim: action.payload,
      };
    case "Foto":
      return {
        ...state,
        foto: action.payload,
      };
    case "Aciklama":
      return {
        ...state,
        aciklama: action.payload,
      };
    case "selectedFlower":
      const selected = action.payload;
      //projedeki herhangi bir card üzerindeki edit butonuna basıldığında seçilen tanrı state'i doldurulurken aynı zmanada da seçilen bilgilerin forma aktarılması için form state'leri de doldurulabilir. böylelikle fazladan bir case yazılmadan ve contextdeki useEffect ihtiyaç duyulmadan işlem gerçekleştirlir.
      return {
        ...state,
        selectedFlower: selected,
        bitkiAdi: selected.bitkiAdi,
        latinBitkiAdi: selected.latinBitkiAdi,
        turu: selected.turu,
        anlami: selected.anlami,
        iklim: selected.iklim,
        aciklama: selected.aciklama,
        foto: selected.foto,
      };
    case "selectedCategory":
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case "search":
      return {
        ...state,
        search: action.payload,
      };
    case "AddFlower":
      const newFlowerList = [...state.flowers, action.newFlower];
      //state'i direkt olarak action objesinden gelen newGod ile güncelleyemeyiz, çinkü bu durumda eski verileri silip sadece yeniyi ekler. eskilerin üzerine ekleme işlemi yapılması bu yönteme kullanılmıştır.
      return {
        ...state,
        flowers: newFlowerList,
      };
    case "DeleteFlower":
      const updateFlowerList = state.flowers.filter(
        (item) => item.id !== action.id
      );
      return {
        ...state,
        flowers: updateFlowerList,
      };
    case "EditFlower":
      const editedFlowerList = state.flowers.map((item) => {
        if (item.id === state.selectedFlower.id) {
          return { ...action.newFlower };
        } else {
          return { ...item };
        }
      });
      return {
        ...state,
        selectedFlower: "",
        flowers: editedFlowerList,
      };
  }
};
