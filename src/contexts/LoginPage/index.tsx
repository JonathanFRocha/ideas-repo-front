import React, { createContext, useState } from "react";

export interface ILogin {
  username: string;
  email: string;
  password: string;
}

export interface ILoginContext {
  state: ILogin;
  setState: React.Dispatch<React.SetStateAction<ILogin>>;
}

export interface IPropsLoginContext {
  children: React.ReactChild;
}

const DEFAULT_VALUE = {
  state: {
    username: "",
    email: "",
    password: "",
  },
  setState: () => {},
};

const LoginContext = createContext<ILoginContext>(DEFAULT_VALUE);

export const LoginContextProvider: React.FC<IPropsLoginContext> = ({
  children,
}: IPropsLoginContext) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <LoginContext.Provider value={{ state, setState }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
