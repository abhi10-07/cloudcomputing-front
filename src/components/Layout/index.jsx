import React from "react";
import Nav from "./Nav";

const index = (props) => {
  return (
    <>
      <Nav />
      <main>{props.children}</main>
    </>
  );
};

export default index;
