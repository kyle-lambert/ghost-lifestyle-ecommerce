import React from "react";
import * as S from "./StyledUserForm.js";

import FormInputWithLabel from "../FormInputWithLabel";

function UserForm({ logIn }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    if (name === "email") setEmail(e.target.value);
    if (name === "password") setPassword(e.target.value);
  };

  return (
    <S.Form>
      <FormInputWithLabel
        name="email"
        onChange={handleChange}
        value={email}
        label="Email"
      />
      <FormInputWithLabel
        name="password"
        onChange={handleChange}
        value={password}
        label="Password"
      />
      <S.SubmitButton>{logIn ? "Login" : "Sign Up"}</S.SubmitButton>
    </S.Form>
  );
}

export default UserForm;
