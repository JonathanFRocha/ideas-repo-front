import * as React from "react";

export interface IButtonProps {
  children: React.ReactChild;
  action: React.MouseEventHandler;
  style: string;
}

export default function Button({ children, action, style }: IButtonProps) {
  return (
    <button className={style} onClick={action}>
      {children}
    </button>
  );
}
