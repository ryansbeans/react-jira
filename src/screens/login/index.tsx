import qs from "qs";
import React, { FormEvent } from "react";
import { useAuth } from "../../context/auth-context";
import { cleanObject } from "../../utils";
const apiUrl = process.env.REACT_APP_API_URL; // 切换环境变量

export const LoginScreen = () => {
  const { login, user } = useAuth();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 强制他是HTMLFormElement类型
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value;
    const password = (event.currentTarget.elements[1] as HTMLFormElement).value;
    login({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      {user ? <div>登录成功，用户名：{user?.name}</div> : null}

      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="text" id={"password"} />
      </div>
      <button type={"submit"}>登录</button>
    </form>
  );
};
