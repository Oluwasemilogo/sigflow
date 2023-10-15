import React, { useState } from "react";
import axios from "axios";
import github from "../Assets/github.svg";
import google from "../Assets/google.svg";
import sso from "../Assets/key-01.svg";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://sig-staging-api-a4c37da3d933.herokuapp.com/auth/login",
        userData
      );

      if (
        email === "shalom.111@gmail.com" &&
        password === "shalom.111@gmail.com"
      ) {
        
        if (response.data && response.data.message === "Success") {
        
          setSuccessMessage("Login successful!");
          setError("");
        } else {
        
          setError("Login failed. Please check your credentials.");
          setSuccessMessage("");
        }
      } else {
        setError("Login failed. Please check your credentials.");
        setSuccessMessage("");
      }
    } catch (error) {
      
      setError("An error occurred while logging in. Please try again later.");
      setSuccessMessage("");
    }
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
          />
        </div>
        <div className="mt-3 mb-2">
          <label
            htmlFor="password"
            className="block mb-3 text-sm font-medium text-[#101828]"
          >
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-[26.25rem] border border-gray-300 rounded-md p-2 bg-white focus:outline-none"
            placeholder=""
          />
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
        <p className="text-[#828282] text-base font-medium text-center my-5">
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
        <button className="flex gap-3 items-center border border-gray-300 rounded-md p-3 bg-white mt-6 mx-auto">
          <p className="">Sign In with SSO</p>
          <img src={sso} alt="SSO" className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};
