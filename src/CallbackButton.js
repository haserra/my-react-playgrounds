import React from "react";
import { SimpleButton } from "./SimpleButton";

export function CallbackButton(props) {
  return (
    <>
      <button
        className={`btn btn-${props.theme} btn-sm m-1`}
        onClick={props.callback}
      >
        {props.text}
      </button>
      <SimpleButton
        {...props}
        className={`btn btn-${props.theme} btn-sm m-1`}
      />
    </>
  );
}
