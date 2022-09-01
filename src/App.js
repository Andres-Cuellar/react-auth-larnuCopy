import { useContext } from "react";
import { RequestContextPost } from "./context/RequestContextPost";
import { RequestContextPostProvider } from "./context/RequestContextPost";
import './App.css';
import Form from "./compnents/Formulario";
import Welcome from './compnents/PeticionGet';


function App() {
  const logged  = useContext(RequestContextPost)

  console.log(logged)

  return (
    
    <RequestContextPostProvider>
      <div className="App">
        <h1>Ejercicio en clase utilizando useContext ('contiene error')</h1>
        {
         logged ? <Welcome/> : <Form />
        }
      </div>
    </RequestContextPostProvider>
  )
}
export default App;