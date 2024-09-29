import React, { useState } from "react";
import { auth } from "../Firebase";

import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit =  (e) => {
    e.preventDefault();
    try {
      const user =  signInWithEmailAndPassword(auth, email, password);
      console.log(user);

      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const googleClick = () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = signInWithPopup(auth, provider)

      navigate('/home');
      
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className="container" style={{ width: "50%" }}>
        <h1 className="text-center">React Firebase Authincation</h1>

        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
               value={password}
               onChange={(e) => setPassword(e.target.value)}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="text-center">
              <button
                style={{ width: "40%" }}
                type="submit"
                class="btn btn-primary"
              >
                Login
              </button>
            </div>
              <Link to='/register' ><p style={{color:"white", marginLeft:"30rem"}}>Register New User</p></Link>
          </form>
        </div>

        <div className="container text-center">
            <div className="d-flex justify-content-center align-items-center">
          <button

          onClick={googleClick}


            className="btn d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "white", width:"72%" }}
          >
            <div style={{ width: "12%" }}>
              <img
                src="https://lh3.googleusercontent.com/Yx7vV-EZEFS5QJVosjaldoTtYy77RahKD-PdOYi7BGE5KICGm5xhsiQ3sa4mESsfZ1dgwEaUi9jfuwPvolTUa1md6W-u7SmcrIxQVg"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div>
              <h2 style={{ fontWeight: "bold", color: "red" }}>
                Login with Google
              </h2>
            </div>
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
