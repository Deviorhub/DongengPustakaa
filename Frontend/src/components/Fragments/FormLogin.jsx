import React from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/Index";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    try {
      console.log("hai");
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      });
      console.log("gg");
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // setFormData({
        //   username: "",
        //   email: "",
        //   password: "",
        // });
        navigate("/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      <Button color="bg-[#B2AFE7]" px="6" py="2" text="Masuk" width="w-full" />
    </form>
  );
};

export default FormLogin;
