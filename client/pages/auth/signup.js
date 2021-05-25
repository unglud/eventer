import { useState } from "react";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(`emails,password`, email,password);
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign up</h1>
      <div className="form-group">
        <label htmlFor="">Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} type="" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="">Password</label>
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className="form-control" />
      </div>
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};