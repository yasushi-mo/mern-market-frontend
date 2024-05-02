import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { LOCAL_STORAGE_TOKEN_KEY } from "./constants";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

    if (!token) {
      navigate("/user/login");
    }

    try {
      const decoded = jwt_decode(token);
      setLoginUser(decoded.email);
    } catch (error) {
      navigate("/user/login");
    }
  }, [navigate]);

  return loginUser;
};
