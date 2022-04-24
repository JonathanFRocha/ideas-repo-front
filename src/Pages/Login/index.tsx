import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Logo.png";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import style from "./Login.module.scss";

export interface ILoginPageProps {}

enum typeButtons {
  signIn = "signIn",
  signUp = "signUp",
}

const DEFAULT_STATE = {
  signIn: false,
  signUp: false,
};

export default function LoginPage(props: ILoginPageProps) {
  const navigate = useNavigate();

  const [buttonState, setButtonState] = React.useState(DEFAULT_STATE);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

  const renderInputs = () => {
    if (buttonState.signIn || buttonState.signUp) {
      return (
        <>
          <Input
            placeholder="Username"
            type="text"
            value={username}
            setVal={setUsername}
            class={style.input}
          />
          {buttonState.signUp ? (
            <Input
              placeholder="Email"
              type="email"
              value={email}
              setVal={setEmail}
              class={style.input}
            />
          ) : (
            ""
          )}
          <Input
            placeholder="Password"
            type="password"
            value={password}
            setVal={setPassword}
            class={style.input}
          />
        </>
      );
    }
    return "";
  };

  const updateButtonStatus = (e: React.MouseEvent, type: string) => {
    e.preventDefault();
    setButtonState({
      signIn: type == typeButtons.signIn,
      signUp: type == typeButtons.signUp,
    });
  };

  const isPressed = () => {
    return buttonState.signIn || buttonState.signUp;
  };

  const signInForm = () => {
    navigate("/ideas");
  };

  return (
    <div className={style.loginCard}>
      <img className={style.login__img} src={logo} alt="Logo" />
      <div className={style.login__inputcontainer}>
        {renderInputs()}
        {isPressed() ? (
          <Button
            style={isPressed() ? style.buttonDownsized : style.buttonStandard}
            action={signInForm}
          >
            Login
          </Button>
        ) : (
          ""
        )}
        <div className={style.button__container}>
          <Button
            style={isPressed() ? style.buttonDownsized : style.buttonStandard}
            action={(e) => updateButtonStatus(e, typeButtons.signIn)}
          >
            Sign In
          </Button>
          <Button
            style={isPressed() ? style.buttonDownsized : style.buttonStandard}
            action={(e) => updateButtonStatus(e, typeButtons.signUp)}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
