import React, { PropsWithChildren } from "react";
import Header from "../../../components/Header";

const DafaultLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default DafaultLayout;
