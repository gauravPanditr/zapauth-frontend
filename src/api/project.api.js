
import api from "./axios";

export const createProject = (data) => {
  const token = localStorage.getItem("accessToken");

  return api.post(
    "/project/create",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        
      },
    }
  );
};

export const getProjects = async () => {
  // Get token from localStorage
  const token = localStorage.getItem("accessToken");

  if (!token) {
    throw new Error("No access token found. Please login.");
  }

  // Call API with Bearer token in headers
  return api.get("/project/projects", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};