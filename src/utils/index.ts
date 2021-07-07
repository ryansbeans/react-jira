import { useEffect, useState } from "react";
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
// 在一个函数里,改变传入的对象本身是不好的

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每当value变化后,设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个useEffect处理完后再执行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

export const useArray = <V>(arr: V) => {
  const [obj, setObj] = useState(arr); // 设置table的列表

  const _value = () => {
    return obj;
  };
  const _clear = () => {
    return obj;
  };
  return {
    value: _value,
    clear: _clear,
  };
};
