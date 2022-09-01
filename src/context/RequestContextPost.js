import {React, createContext, useState} from 'react'
import axios from "axios";

export const RequestContextPost = createContext()

export const RequestContextPostProvider = (props) => {

  const baseUrl = 'https://ms-discord-upy5mhs63a-rj.a.run.app';
  
  const [values, setValues] = useState({
    email: "jose@larnu.com",
    discordId: "310544245155168256"
  });
  const [token, setToken] = useState(null);
  const [logged, setLogged] = useState(false);

  
  
  const handleChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value
    }));
  }

  function login() {
    axios.post(`${baseUrl}/auth/login`, values)
      .then(res=> res.data.token)
      .then(token => {
        setToken(token)
        setLogged(true)
      })
  }


  function submit(e) {
    e.preventDefault();
    login();
  }
    
    return (
      <RequestContextPost.Provider value={{
        baseUrl,
        values,
        token,
        logged,
        handleChange,
        login,
        submit
      }}>
          {props.children}
      </RequestContextPost.Provider>
    )
  }