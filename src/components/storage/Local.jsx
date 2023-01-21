import { useEffect, useState } from "react";

const Prifix = "Mypen-";
export const Local = (key, initial) => {
  const prefixKey = Prifix + key;

  const [value, setValue] = useState(() => {
    const data = localStorage.getItem(prefixKey);
    if (data !== null) {
      return JSON.parse(data);
    }

    if (typeof initial === "function") {
      return initial();
    } else {
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixKey, JSON.stringify(value));
  }, [prefixKey, value]);
  return [value, setValue];
};
