import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Error from "../../common/Error/Error";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [change, setOnChange] = useState(false);
  const [errors, setErrors] = useState([]);

  // login
  function login() {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((r) => {
      if (r.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "LoggedIn successfully!",
          showConfirmButton: false,
          timer: 3000,
        });
        navigate("/home");
        window.location.reload();
      } else if (!r.ok) {
        r.json().then((err) => setErrors(err.errors));
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Server Error!",
        });
      }
    });
  }

  const handleSubmit = (e) => {
    // send Data to rails
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className={styles.login}>
      <form className={styles.form_container} onSubmit={handleSubmit}>
        <div className={styles.logo_container}></div>
        <div className={styles.title_container}>
          <p className={styles.title}>Login to your Account</p>
          <span className={styles.subtitle}>
            Get started with our app, just create an account and enjoy the
            experience.
          </span>
        </div>
        <br />

        <div className={styles.input_container}>
          {/* <label className={styles.input_label} htmlFor="email_field">
              Username
            </label> */}
          {/* <EmailIcon className="icon" /> */}
          <input
            placeholder="Enter your username...."
            onChange={(e) => setUsername(e.target.value)}
            title="Input title"
            name="input-name"
            type="text"
            className={styles.input_field}
            id="name_field"
          />
        </div>

        <div className={styles.input_container}>
          {/* <label className={styles.input_label} htmlFor="password_field">
              Password
            </label> */}

          <input
            placeholder="Password"
            title="Input title"
            onChange={(e) => setPassword(e.target.value)}
            name="input-name"
            type="password"
            className={styles.input_field}
            id="password_field"
          />
          {errors.map((element, index) => (
            <Error key={index}>{element}</Error>
          ))}
          <button
            // disabled={!username || !password}
            className={styles.sign_in_btn}
          >
            <span>Log in</span>
          </button>
        </div>

        <div className={styles.separator}>
          <hr className={styles.line} />
          <span> Or</span>
          <hr className={styles.line} />
        </div>
        <div className={styles.link_signUp}>
          <Link
            to="/signup"
            className={styles.sign_up_apl}
            // className={styles.sign_in_apl}
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            <span style={{ color: "grey" }}>New to Pledge Up?</span>
            <span className={styles.signup_link}>Sign Up now</span>
          </Link>
        </div>
      </form>
      <div className={styles.login_gradient} />
    </div>
  );
}

export default Login;
