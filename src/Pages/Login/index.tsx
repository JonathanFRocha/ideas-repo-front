import * as React from "react";
import logo from "../../Assets/Logo.png";
import Button from "../../Components/Button";
import style from "./Login.module.scss";

export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
  const [buttonState, setButtonState] = React.useState();

  return (
    <div className={style.loginCard}>
      <img className={style.login__img} src={logo} alt="Logo" />
      <div className={style.login__inputcontainer}>
        {/* <Input id="login" type="text" placeholder="Username" />
      <Input id="password" type="password" placeholder="Password" /> */}
        <Button style=".SignIn" action={(e) => console.log(e)}>
          Sign In
        </Button>
        <Button style=".SignUp" action={(e) => console.log(e)}>
          Sign Up
        </Button>
      </div>
    </div>
  );
}
