import api from "./axios";


export const signup = (data) => {
  return api.post("/admin/signup", data)
  
}
export const login=(data)=>{
   return api.post("/admin/login",data);
}

export const getAdminProfile = () => {
  const token = localStorage.getItem("accessToken");
  return api.get("/admin/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

