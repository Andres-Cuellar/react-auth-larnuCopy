import { React, createContext, useState } from "react";
import axios from "axios";

export const RequestContextPost = createContext();

export const RequestContextPostProvider = (props) => {
  const baseUrl = "https://ms-discord-upy5mhs63a-rj.a.run.app";

  const [token, setToken] = useState(null);
  const [logged, setLogged] = useState(false);

  function login(data) {
    axios
      .post(`${baseUrl}/auth/login`, data)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
      })
      .then((token) => {
        setToken(token);
        setLogged(true);
      });
  }

  return (
    <RequestContextPost.Provider
      value={{
        baseUrl,
        token,
        logged,
        login,
      }}
    >
      {props.children}
    </RequestContextPost.Provider>
  );
};
