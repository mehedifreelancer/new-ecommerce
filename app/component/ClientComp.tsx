"use client";
import { useState } from "react";
import ServerComp from "./ServerComp";

const ClientComp = () => {
  const [test, setTest] = useState(false);
  return (
    <div>
      <ServerComp />
    </div>
  );
};

export default ClientComp;
