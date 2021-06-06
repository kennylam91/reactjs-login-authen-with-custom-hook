import { useState } from "react";

export default function useToken(){
  
  const getToken = () => {
    localStorage.getItem('token');
  }
  const saveToken = (token) => {
    sessionStorage.setItem('token', token);
    setToken(token);
  }

  const [token, setToken] = useState(getToken());

  return [token,saveToken]
}