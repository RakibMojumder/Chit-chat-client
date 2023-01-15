import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/chitchat-logo.png";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const [animate, setAnimate] = useState({
    email: false,
    password: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation({
    mutationFn: async (userInfo) => {
      const res = await axios.post(
        "http://localhost:5000/auth/login",
        userInfo
      );
      if (res.data.success) {
        localStorage.setItem("chit-chat-user", JSON.stringify(res.data.user));
        navigate("/chat");
        setLoginError("");
      } else {
        setLoginError(res.data.message);
      }
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen font-konit">
      <div className="w-2/6 p-10 border border-[#4BD16F] rounded-xl">
        <img src={logo} className="w-2/5 mx-auto mb-8" alt="" />
        <div>
          {loginError && <p className="text-red-500 mb-3">{loginError}</p>}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <div
                className={`flex border border-[#4BD16F] w-full text-lg focus:outline-none ${
                  animate.email &&
                  "shadow-[0_-3px_4px_#4BD16F,0_3px_4px_#4BD16F] border-none outline-none"
                } ${
                  errors?.email?.message &&
                  "border-red-500 shadow-[0_-3px_4px_#F87171,0_3px_4px_#F87171]"
                }`}
              >
                <div
                  className="flex-1 h-full relative"
                  onClick={() => setAnimate({ ...animate, email: true })}
                  onBlur={(e) =>
                    e.target.value
                      ? setAnimate({ ...animate, email: true })
                      : setAnimate({ ...animate, email: false })
                  }
                >
                  <input
                    className="w-full pt-4 pb-1 pl-4 focus:outline-none"
                    type="email"
                    {...register("email", {
                      required: "Your email is required",
                    })}
                  />
                  <span
                    className={`text-gray-500 text-xl absolute left-4 top-2 transition-all ease-linear ${
                      animate.email && "-top-0 text-sm"
                    }`}
                  >
                    Email
                  </span>
                </div>
                <div
                  className={`w-12 flex justify-center items-center text-2xl bg-[#4BD16F] text-white ${
                    errors?.email?.message && "bg-red-400"
                  }`}
                >
                  <AiOutlineMail />
                </div>
              </div>
              {errors.email && (
                <p className="text-red-500 mt-1">{errors?.email?.message}</p>
              )}
            </div>
            {/*  */}
            <div>
              <div
                className={`flex border border-[#4BD16F] w-full text-lg focus:outline-none ${
                  animate.password &&
                  "shadow-[0_-3px_4px_#4BD16F,0_3px_4px_#4BD16F] border-none outline-none"
                } ${
                  errors?.password?.message &&
                  "border-red-500 shadow-[0_-3px_4px_#F87171,0_3px_4px_#F87171]"
                }`}
              >
                <div
                  className="flex-1 h-full relative"
                  onClick={() => setAnimate({ ...animate, password: true })}
                  onBlur={(e) =>
                    e.target.value
                      ? setAnimate({ ...animate, password: true })
                      : setAnimate({ ...animate, password: false })
                  }
                >
                  <input
                    className={`w-full pt-4 pb-1 pl-4 focus:outline-none ${
                      showPass || "font-extrabold tracking-widest"
                    }`}
                    type={showPass ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 character",
                      },
                      maxLength: {
                        value: 12,
                        message:
                          "Password cannot exceed more than 12 characters",
                      },
                    })}
                  />
                  <span
                    className={`text-gray-500 text-xl absolute left-4 top-2 transition-all ease-linear ${
                      animate.password && "-top-0 text-sm"
                    }`}
                  >
                    Password
                  </span>
                </div>
                <div
                  className={`w-12 flex justify-center items-center text-2xl bg-[#4BD16F] text-white ${
                    errors?.password?.message && "bg-red-400"
                  }`}
                >
                  {showPass ? (
                    <FiEye onClick={() => setShowPass(!showPass)} />
                  ) : (
                    <FiEyeOff onClick={() => setShowPass(!showPass)} />
                  )}
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#4BD16F] text-white font-bold uppercase text-xl"
            >
              Log in
            </button>
          </form>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="transition-all hover:text-[#4BD16F] hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
