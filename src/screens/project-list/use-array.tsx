import React from "react";
import { useArray, useMount } from "../../utils";
export const UseArray = () => {
  const persons: { name: string; age: number }[] = [
    { name: "jack", age: 25 },
    { name: "ma", age: 22 },
  ];

  const { value, clear, removeIndex, add } = useArray(persons);
  console.log(value);
  useMount(() => {
    // console.log(value.noExist)
  });
  return (
    <div>
      <div>
        <button onClick={() => clear()}>clear</button>
        <button onClick={() => removeIndex(0)}>removeIndex</button>
        <button onClick={() => add({ name: "pjf", age: 27 })}>add</button>
      </div>
      <ul>
        {value.map((v) => (
          <li key={v.name}>{v.name}</li>
        ))}
      </ul>
    </div>
  );
};
