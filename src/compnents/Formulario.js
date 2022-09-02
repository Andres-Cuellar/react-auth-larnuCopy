import { useContext, useState } from "react";
import { RequestContextPost } from "../context/RequestContextPost";

const Form = () => {
  const { login, logged } = useContext(RequestContextPost);

  const [email, setEmail] = useState("");
  const [discordId, setDiscordId] = useState("");

  const data = {
    email,
    discordId,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(data);
  };

  console.log(logged);
  return (
    <form className="form">
      <div>
        <label>email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />
      </div>
      <div>
        <label>discordId</label>
        <input
          type="text"
          name="discordId"
          value={discordId}
          onChange={(e) => setDiscordId(e.target.value)}
          placeholder="Discord Id"
          required
        />
      </div>
      <button onClick={handleSubmit}>Login</button>
    </form>
  );
};
export default Form;
