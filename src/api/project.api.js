
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

export const createNewProjectKey=(data)=>{
   const token =localStorage.getItem("acc")
}

