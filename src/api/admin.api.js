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
    return await api.get("/admin/me", {
      withCredentials: true,
    });
  } catch (error) {
    if (error.response?.status === 401) {
      return await handleRefreshAndRetry();
    }

    throw error;
  }
};

const handleRefreshAndRetry = async () => {
  try {
    const refreshRes = await api.post("/admin/refresh", null, {
      withCredentials: true,
    });

    const newAccessToken = refreshRes.data.accessToken;

    if (!newAccessToken) {
      throw new Error("No token from refresh");
    }

    localStorage.setItem("accessToken", newAccessToken);

    // Retry original call
    return await api.get("/admin/me", {
      withCredentials: true,
    });

  } catch (err) {
    // YAHI SE TUM LOGOUT KARO
    localStorage.removeItem("accessToken");
    window.location.href = "/login";
    throw err;
  }
};
