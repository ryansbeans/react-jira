import React, { useState } from "react";
import { useArray } from "../../utils";
export const UseArray = () => {
  const persons: { name: string; age: number }[] = [
    { name: "jack", age: 25 },
    { name: "ma", age: 22 },
  ];

  const { value, clear } = useArray(persons);
  console.log(value());
  clear();
  return <div>123</div>;
};
