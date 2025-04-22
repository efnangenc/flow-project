import axios from "axios";

const AuthService = {
  login: async (username, password) => {
    const url = "https://api.escuelajs.co/api/v1/auth/login";
    const response = await axios.post(url, {
      email: username,
      password,
    }); //giriş başarılı ise tokenleri döner!!
    console.log("AuthService: ", response);
    if(response.data.access_token)
    {
        localStorage.setItem("userToken", JSON.stringify(response.data));
    }//eğer giriş başarılıysa tokenleri localStorage'a kaydeder.
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("userToken");
    //localstorage'a login işlemiyle kaydedilen tokenin silinmesini sağlar.
  },//asenkron bir metot değilllll
};

export default AuthService;
