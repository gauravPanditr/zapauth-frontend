import api from "./axios";



export const signup = (data) => {
  return api.post("/admin/signup", data);
};

export const login = (data) => {
  return api.post("/admin/login", data);
};

export const logout = () => {
  return api.post("/admin/logout");
};


export const getAdminProfile = async () => {
  try {
    // First attempt
    const res = await api.get("/admin/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      withCredentials: true,
    });
    return res;
  } catch (error) {
    if (error.response?.status === 401) {
      try {
      
        const refreshRes = await api.post("/admin/refresh", null, {
          withCredentials: true, // send httpOnly refresh cookie
        });

      
        const newAccessToken = refreshRes.data.accessToken;
        localStorage.setItem("accessToken", newAccessToken);

        
        return await api.get("/admin/me", {
          headers: { Authorization: `Bearer ${newAccessToken}` },
          withCredentials: true,
        });
      } catch (refreshErr) {
        console.error("Refresh token failed:", refreshErr);
        throw refreshErr;
      }
    }

    throw error;
  }
};

