import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Logo.png";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import LoginContext from "../../contexts/LoginPage";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../../Helpers/inputValidation";
import style from "./Login.module.scss";

enum typeButtons {
  signIn = "signIn",
  signUp = "signUp",
}

const DEFAULT_LOGIN_STATE = {
  signIn: false,
  signUp: false,
};

const DEFAULT_INPUT_ERROR_STATE = {
  username: true,
  password: true,
  email: true,
};

export default function LoginPage() {
  const navigate = useNavigate();
  const { state, setState } = useContext(LoginContext);
  const [buttonState, setButtonState] = useState(DEFAULT_LOGIN_STATE);
  const [errorState, setErrorState] = useState(DEFAULT_INPUT_ERROR_STATE);

  const updateButtonStatus = (e: React.MouseEvent, type: string) => {
    e.preventDefault();
    setButtonState({
      signIn: type === typeButtons.signIn,
      signUp: type === typeButtons.signUp,
    });
  };

  const isPressed = () => {
    return {
      pressed: buttonState.signIn || buttonState.signUp,
      signIn: buttonState.signIn,
      signUp: buttonState.signUp,
    };
  };

  const validateInputEmail = (): boolean => {
    const validatedEmail = validateEmail(state.email);
    setErrorState({ ...errorState, email: validatedEmail });
    return validatedEmail;
  };

  const validateLoginInputs = (): boolean => {
    const validatedUsername = validateUsername(state.username);
    const validatedPassword = validatePassword(state.password);
    setErrorState({
      ...errorState,
      username: validatedUsername,
      password: validatedPassword,
    });

    return validatedUsername && validatedPassword;
  };

  const signInForm = () => {
    const validatedInputs = validateLoginInputs();
    if (validatedInputs) {
      navigate("/ideas");
    }
  };

  const signUpForm = () => {
    const validatedInputs = validateLoginInputs();
    const validEmail = validateInputEmail();
    console.log(errorState);
    if (validatedInputs && validEmail) {
      navigate("/ideas");
    }
  };

  const renderInputs = () => {
    if (buttonState.signIn || buttonState.signUp) {
      return (
        <>
          <Input
            placeholder="Username"
            type="text"
            value={state.username}
            setVal={(e: React.ChangeEvent<HTMLInputElement>) =>
              setState({ ...state, username: e.target.value })
            }
            class={style.input}
          />
          {!errorState.username ? <span>Invalid Username</span> : ""}
          {buttonState.signUp ? (
            <Input
              placeholder="Email"
              type="email"
              value={state.email}
              setVal={(e: React.ChangeEvent<HTMLInputElement>) =>
                setState({ ...state, email: e.target.value })
              }
              class={style.input}
            />
          ) : (
            ""
          )}
          {!errorState.email ? <span>Invalid Email</span> : ""}
          <Input
            placeholder="Password"
            type="password"
            value={state.password}
            setVal={(e: React.ChangeEvent<HTMLInputElement>) =>
              setState({ ...state, password: e.target.value })
            }
            class={style.input}
          />
          {!errorState.password ? <span>Invalid password</span> : ""}
        </>
      );
    }
    return "";
  };

  return (
    <div className={style.loginCard}>
      <img className={style.login__img} src={logo} alt="Logo" />
      <div className={style.login__inputcontainer}>
        {renderInputs()}
        {isPressed().pressed ? (
          <Button
            style={
              isPressed().pressed ? style.buttonDownsized : style.buttonStandard
            }
            action={isPressed().signIn ? signInForm : signUpForm}
          >
            {isPressed().signIn ? "Login" : "Confirm"}
          </Button>
        ) : (
          ""
        )}
        <div className={style.button__container}>
          <Button
            style={
              isPressed().pressed ? style.buttonDownsized : style.buttonStandard
            }
            action={(e) => updateButtonStatus(e, typeButtons.signIn)}
          >
            Sign In
          </Button>
          <Button
            style={
              isPressed().pressed ? style.buttonDownsized : style.buttonStandard
            }
            action={(e) => updateButtonStatus(e, typeButtons.signUp)}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
