"use client";
import Heading from "@/components/Heading";
import Submit from "@/components/Submit";
import { api } from "@/public/data";
import axios from "axios";
import { useState } from "react";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(`${api}/users/forgotPassword`, { email: email })
      .then((res) =>
        res.status === 200 ? setError("Check Your Email !") : setError("Error")
      )
      .catch((err) => setError(err.response.data.message));
  };

  return (
    <div className="pad min-h-[70vh] flex flex-col justify-center items-center gap-2">
      <form
        onSubmit={submit}
        className="w-[400px] h-[300px] px-2 py-4 bg-bglight dark:bg-darker rounded-[28px] flex flex-col justify-center items-center gap-4"
      >
        <Heading title="Enter Your Email" />
        <p
          className={`${
            error === "Check Your Email !" ? "yellow" : "text-red-600"
          }  text-center`}
        >
          {error}
        </p>
        <input
          type="email"
          placeholder="Email"
          required
          className="w-[90%] rounded-[10px] p-4"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Submit title="Confirm" />
      </form>
    </div>
  );
}
