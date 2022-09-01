import { useContext } from "react";
import { RequestContextPost } from "../context/RequestContextPost";


const Form = () =>{
    const { submit, values, handleChange } = useContext(RequestContextPost)
    return (
      <form className='form' onSubmit={submit}>
        <div>
          <label>email</label>
          <input 
            type="email"
            name='email'
            value={values.email || ''}
            onChange={handleChange}
            placeholder='email'
            required
          />
        </div>
        <div>
          <label>discordId</label>
          <input 
            type="text"
            name='discordId'
            value={values.discordId || ''}
            onChange={handleChange}
            placeholder='Discord Id'
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
  export default Form;