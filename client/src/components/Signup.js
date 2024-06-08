import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import google from "../assets/google.png";
import { SIGNUP_MUTATION } from "../graphql/mutation";
function Signup() {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [signup] = useMutation(SIGNUP_MUTATION, {
        variables: {
          email: formState.email,
          password: formState.password,
          confirmPassword: formState.confirmPassword
        },
        onCompleted: ({ signup }) => {
            console.log("signup")
        //   localStorage.setItem(AUTH_TOKEN, signup.token);
          navigate('/');
        }
    });

    const submitForm = (e) => {
        e.preventDefault(); 
        console.log("ppp")
        signup({
          variables: formState
        });
      };
    
  return (
    <section className="container forms">
      <div className="form signup">
        <div className="form-content">
          <header>Signup</header>
          <form onSubmit={(e) => submitForm(e)}>
            <div className="field input-field">
              <input type="email" value={formState.email}
                onChange={(e) =>
                    setFormState({
                        ...formState,
                        email: e.target.value
                    })
            } placeholder="Email" className="input" />
            </div>
            <div className="field input-field">
              <input
                type="password"
                placeholder="Create password"
                className="password"
                value={formState.password}
                onChange={(e) =>
                    setFormState({
                    ...formState,
                    password: e.target.value
                    })
                }
              />
            </div>
            <div className="field input-field">
              <input
                type="password"
                placeholder="Confirm password"
                className="password"
                value={formState.confirmPassword}
                onChange={(e) =>
                    setFormState({
                    ...formState,
                    confirmPassword: e.target.value
                    })
                }
              />
              <i className="bx bx-hide eye-icon" />
            </div>
            <div className="field button-field">
              <button>Signup</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              Already have an account?{" "}
              <a href="#" className="link login-link">
                Login
              </a>
            </span>
          </div>
        </div>
        <div className="line" />
        <div className="media-options">
          <a href="#" className="field facebook">
            <i className="bx bxl-facebook facebook-icon" />
            <span>Login with Facebook</span>
          </a>
        </div>
        <div className="media-options">
          <a href="#" className="field google">
            <img src={google} alt="" className="google-img" />
            <span>Login with Google</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Signup;
