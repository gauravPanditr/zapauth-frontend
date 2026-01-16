import api from "./axios";


export const signup = (data) => {
  return api.post("/admin/signup", data)
  
}