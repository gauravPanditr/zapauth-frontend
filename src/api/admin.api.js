import api from "./axios";

export const signup = (data) => api.post("/admin/signup", data);
export const login = (data) => api.post("/admin/login", data);
export const logout = () => api.post("/admin/logout");
export const getAdminProfile = () => api.get("/admin/me");
export const deleteAccount = () => api.delete("/admin/delete");
export const updateAccount=(data)=>api.patch('/admin/update',data);