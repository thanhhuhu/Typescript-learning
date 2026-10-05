import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Kiểm tra username và password
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    // Đăng nhập
    login({
      id: 1,
      name: username,
      email: "nguyendinhthanh2002@gmail.com",
    });

    // Chỉ chuyển sang Dashboard sau khi bấm Login
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-form">

        <h1>Đăng nhập</h1>

        <form onSubmit={handleLogin}>

          {/* Username */}
          <div>
            <label>Username</label>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập username"
            />
          </div>

          {/* Password */}
          <div>
            <label>Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập password"
            />
          </div>

          {/* Login button */}
          <button type="submit">
            Đăng nhập
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;