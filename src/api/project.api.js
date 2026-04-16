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
  
  const token = localStorage.getItem("accessToken");

  if (!token) {
    throw new Error("No access token found. Please login.");
  }

 
  return api.get("/project/projects", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const deleteProjectById = (projectId) => {
  const token = localStorage.getItem("accessToken");
  if (!token) throw new Error("No access token found. Please login.");

  return api.delete(`/project/delete/${projectId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteAllProject=()=>{
  const token = localStorage.getItem("accessToken");
  if (!token) throw new Error("No access token found. Please login.");

  return api.delete(`/project/delete/all`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export const getProjectById = (projectId) => {
  const token = localStorage.getItem("accessToken");

  return api.get(`/project/${projectId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProject = (data) => {
  const token = localStorage.getItem("accessToken");
  if (!token) throw new Error("No access token found. Please login.");

  return api.patch("/project/update", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};