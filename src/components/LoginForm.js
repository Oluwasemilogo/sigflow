import React, { useState } from "react";
import axios from "axios";
import github from "../Assets/github.svg";
import google from "../Assets/google.svg";
import sso from "../Assets/key-01.svg";
import passwordIcon from '../Assets/password.svg'
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      console.log(email, password);
      const response = await axios.post(
        "https://sig-staging-api-a4c37da3d933.herokuapp.com/auth/login",
        userData
      );

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || error.message);
      setSuccessMessage("");
    }
  };
 const togglePassword = () => {
   setShowPassword(!showPassword);
 };
  return (
    <div className="flex flex-col mt-2 px-6">
      <h1 className="text-[#101828] text-2xl font-normal text-center">
        Welcome back!
      </h1>
      <p className="text-[#828282] text-sm font-normal text-center">
        Sign in to access your account
      </p>
      <form>
        <div className="my-3">
          <label
            htmlFor="email"
            className="block mb-3 text-sm font-medium text-[#101828]"
          >
            Email Address
          </label>

          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-[26.25rem] border border-gray-300 rounded-md p-2 bg-white focus:outline-none"
            placeholder=""
            required
          />
        </div>
        <div className="mt-3 mb-2">
          <label
            htmlFor="password"
            className="block mb-3 text-sm font-medium text-[#101828]"
          >
            Password
          </label>
          <div className="flex items-center justify-between w-[26.25rem] border border-gray-300 rounded-md p-2 bg-white focus:outline-none">
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="outline-none bg-transparent"
              placeholder=""
              required
            />
            <img
              src={passwordIcon}
              alt="password"
              className=" cursor-pointer"
              onClick={togglePassword}
            />
          </div>
        </div>
        <p className="text-[#32D583] text-sm font-normal">Forgot Password?</p>
        <button
          onClick={handleLogin}
          className="bg-[#32D583] text-white rounded-md p-2 w-[26.25rem] mt-6"
        >
          Sign In
        </button>
        {error && <p className="text-red-500 mt-3">{error}</p>}
        {successMessage && (
          <p className="text-green-500 mt-3">{successMessage}</p>
        )}
        <p className="text-[#828282] text-base font-medium text-center my-3">
          OR
        </p>
        <div className="flex gap-6">
          <button className="flex gap-3 items-center border border-gray-300 rounded-md p-3 bg-white">
            <p className="">Sign In with GitHub</p>
            <img src={github} alt="github" className="w-6 h-6" />
          </button>
          <button className="flex gap-3 items-center border border-gray-300 rounded-md p-3 bg-white">
            <p className="">Sign In with Google</p>
            <img src={google} alt="google" className="w-6 h-6" />
          </button>
        </div>
        <button className="flex gap-3 items-center border border-gray-300 rounded-md p-3 bg-white mt-4 mx-auto">
          <p className="">Sign In with SSO</p>
          <img src={sso} alt="SSO" className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};
