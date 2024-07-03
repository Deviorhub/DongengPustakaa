import React from 'react'
import InputForm from '../Elements/Input/Index'
import Button from '../Elements/Button/Button'

const FormRegister = () => {
  return (
    <form>
      <InputForm
        label="Username"
        type="text"
        placeholder="Lowkey is Here"
        name="username"
      />
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
      <InputForm
        label="Konfirm Password"
        type="password"
        placeholder="******"
        name="confirm_password"
      />
      <Button
        color="bg-[#B2AFE7]"
        px="6"
        py="2"
        text="Daftar"
        width="w-full"
      />
    </form>
  )
}

export default FormRegister