import * as React from "react";

export interface IInputProps {
  id?: string;
  label?: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  class?: string;
  setVal: Function;
  value: any;
}

export default function Input(props: IInputProps) {
  return (
    <div>
      {props.label ? <label htmlFor={props.id}>{props.label}</label> : ""}
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.setVal(e.target.value)}
        className={props.class}
      />
    </div>
  );
}
