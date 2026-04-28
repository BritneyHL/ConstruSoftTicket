import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../service/AuthService";
import "../styles/Login.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        await login({ email, password });
        navigate("/tickets");
      } else {
        await register({ email, password });
        setIsLogin(true);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-overlay">
          <div className="brand-content">
            <span className="logo-badge">ESTO ES MI TICKET</span>
            <h1>REALIZADO POR</h1>
            <p>BRITNEY GHUVALI HINOSTROZA LAZO</p>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-box">
          <div className="form-header">
            <h2>{isLogin ? "Bienvenido de nuevo" : "Crea tu cuenta"}</h2>
            <p>
              {isLogin
                ? "Ingresa tus credenciales para continuar"
                : "Regístrate para acceder al sistema universitario"}
            </p>
          </div>

          <div className="input-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              placeholder="ejemplo@upla.edu.pe"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="auth-btn" onClick={handleSubmit}>
            {isLogin ? "Ingresar al Sistema" : "Completar Registro"}
          </button>

          <div className="auth-footer">
            <p>
              {isLogin ? "¿Eres nuevo aquí?" : "¿Ya eres parte?"}{" "}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="switch-link"
              >
                {isLogin ? "Regístrate ahora" : "Inicia sesión"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}