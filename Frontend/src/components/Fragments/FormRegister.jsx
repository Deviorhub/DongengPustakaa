import React, { useEffect, useState } from "react";
import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Button";
import { useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

const FormRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    try {
      console.log("hai");
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          username: e.target.username.value,
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
        navigate("/login");
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
        label="Username"
        type="text"
        placeholder="Lowkey is Here"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Button color="bg-[#B2AFE7]" px="6" py="2" text="Daftar" width="w-full" />
    </form>
  );
};

export default FormRegister;
