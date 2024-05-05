import { useState } from "react";

export const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setLoginInfo({
      ...loginInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const jsonResponse = await response.json();
      localStorage.setItem("token", jsonResponse.token);
      alert(jsonResponse.message);
    } catch (error) {
      alert("ログイン失敗");
    }
  };

  return (
    <div>
      <h1 className="page-title">ログイン</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={loginInfo.email}
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="メールアドレス"
          required
        />
        <input
          value={loginInfo.password}
          onChange={handleChange}
          type="text"
          name="password"
          placeholder="パスワード"
          required
        />
        <button>ログイン</button>
      </form>
    </div>
  );
};
