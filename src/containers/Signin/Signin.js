import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { auth } from "../../store/actions/authActions";

const Signin = () => {
  const [userState, setUserState] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setUserState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const login = (e) => {
    e.preventDefault();

    dispatch(auth(userState));
  };

  useEffect(() => {
    document.getElementById("root").style.height = "100vh";
    return () => {
      document.getElementById("root").style.height = "auto";
    };
  }, []);

  return (
    <div className="authincation h-100">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <h4 className="text-center mb-4">Sign in your account</h4>
                    <form action="index.html">
                      <div className="form-group">
                        <label className="mb-1">
                          <strong>Email</strong>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={userState.email}
                          onChange={inputChangeHandler}
                          className="form-control"
                          placeholder="hello@example.com"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label className="mb-1">
                          <strong>Password</strong>
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={userState.password}
                          onChange={inputChangeHandler}
                          className="form-control"
                        />
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          disabled={isLoading}
                          onClick={login}
                        >
                          Sign Me In
                        </button>
                      </div>
                    </form>
                    <div className="new-account mt-3">
                      <p>
                        Don't have an account?{" "}
                        <Link className="text-primary" to="/signup">
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
