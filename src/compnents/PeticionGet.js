import { useContext } from "react";
import { RequestContextPost } from "../context/RequestContextPost";
import axios from "axios";
import { useState, useEffect } from 'react';

const Welcome = () => {
    const { baseUrl, token } = useContext(RequestContextPost)
    // console.log(token)
    const [checked, setChecked] = useState(false);
    const [data, setData] = useState(null);

    async function checkToken () {
      axios.get(`${baseUrl}/auth/check`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then (res => {
        setData(res.data);
        setChecked(true);
      })
    }

    useEffect(()  => {
      checkToken();
    }, []);  

    return ( 
      <>
        { checked ? <div>Bienvenido {data.username}, tu numero de Usuario es: {data.id} </div> : <div>Loading...</div>}
      </>
      )
  }

  export default Welcome;