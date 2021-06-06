import { useState } from "react";

export default function useToken(){
  
  const getToken = () => {
    return localStorage.getItem('token');
  }
  const [token, setToken] = useState(getToken());

  const saveToken = (token) => {
    sessionStorage.setItem('token', token);
    setToken(token);
  }


  return [token, saveToken]
}