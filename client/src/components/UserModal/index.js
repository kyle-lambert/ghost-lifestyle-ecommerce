import React from "react";
import * as S from "./StyledUserModal.js";

import BrandLogo from "../BrandLogo";
import Heading from "../Heading";
import UserForm from "../UserForm";

function UserModal() {
  const [logIn, setLogIn] = React.useState(true);
  const [createAccount, setCreateAccount] = React.useState(false);
  return (
    <>
      <S.Container>
        <S.Backdrop />
        <S.Modal>
          <div className="logo">
            <BrandLogo />
          </div>
          {logIn ? (
            <Heading h2 textCenter>
              Login
            </Heading>
          ) : (
            <Heading h2 textCenter>
              Create an <br /> Account
            </Heading>
          )}
          <UserForm logIn={logIn} />
          <S.TermsBar>
            <span className="span">
              By Signing Up you are agreeing to the Terms and Conditions
            </span>
          </S.TermsBar>
        </S.Modal>
      </S.Container>
    </>
  );
}

export default UserModal;
