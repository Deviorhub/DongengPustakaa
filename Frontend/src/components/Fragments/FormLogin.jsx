import React from 'react'
import Button from '../Elements/Button/Button'
import InputForm from '../Elements/Input/Index'

const FormLogin = () => {
  return (
    <form>
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
      <Button
        color="bg-[#B2AFE7]"
        px="6"
        py="2"
        text="Masuk"
        width="w-full"
      />
    </form>
  )
}

export default FormLogin