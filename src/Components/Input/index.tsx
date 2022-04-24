import * as React from "react";

export interface IInputProps {
  id: string;
  label?: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
}

export default function Input(props: IInputProps) {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      {props.label ? <label htmlFor={props.id}>{props.label}</label> : ""}
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
