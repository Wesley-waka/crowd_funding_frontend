import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import Error from "../../common/Error/Error";
import giphy from "./giphy.gif";
import styles from "./Signup.module.css";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([])

  // sign up
  const signUp = (username, email, password) => {
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        password_confirmation: confirmPassword
      }),
    })
    .then((r)=>{
      if (r.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account created successfully!",
          showConfirmButton: false,
          timer: 3000,
        });
        navigate('/home')
      } else {
          r.json().then(err=>setErrors(err.errors))
      }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send Data to rails
    signUp(username, email, password);
  };

  return (
    <div className={styles.body_container}>
      <form className={styles.form_container} onSubmit={handleSubmit}>
        <h2 style={{fontFamily: "Fredoka, sans-serif"}}>Sign up</h2>

        <div className={styles.input_container}>
          <label className={styles.input_label}>Username</label>
          <input
            placeholder="Username"
            name="username-input"
            type="text"
            className={styles.input_field}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className={styles.input_label}>Email</label>
          <input
            placeholder="email"
            name="email-input"
            type="email"
            className={styles.input_field}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={styles.input_label}>Password</label>
          <input
            placeholder="password"
            name="Password-input"
            type="password"
            className={styles.input_field}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className={styles.input_label}>Confirm password</label>
          <input
            placeholder="confirm password"
            name="confirm-password-input"
            type="password"
            className={styles.input_field}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className={styles.separator} style={{color: 'GrayText'}}>
          Have an account?{" "}
          <Link
            to="/login"
            style={{
              color : 'gold'
            }}
          >
            Log in
          </Link>
          <hr className={styles.line} />
        </div>
        {errors.map((element, index)=><Error key={index}>{element}</Error>)}
        
        <button className={styles.sign_in_btn}>
          <span>Create account</span>
        </button>
      </form>
      <div className={styles.login_gradient}/> 
    </div>
  );
}

export default Signup;
