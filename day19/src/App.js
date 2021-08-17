import React from "react";
import "./style.css";
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";
import Button4 from "./Button4";
export default function App(props)
{
  return(
    <div>
      <p>There are 4 counter components instances that each manage their own state</p>
      <Button1/>
      <Button2/>
      <Button3/>
      <Button4/>
    </div>
  );
}