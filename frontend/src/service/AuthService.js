const API_URL = "http://localhost:5010/api/auth";

// 🔐 LOGIN
export const login = async (data) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Credenciales incorrectas");
  }

  return await response.json();
};

const handleSubmit = async () => {
  try {
    if (isLogin) {
      await login({ email, password });
 
      alert("Login correcto ✅");
      navigate("/tickets");
 
    } else {
      await register({ email, password });
 
      alert("Usuario creado correctamente ✅"); // 👈 mensaje
      setIsLogin(true);
 
      // limpiar campos (opcional pero pro)
      setEmail("");
      setPassword("");
    }
  } catch (error) {
    alert(error.message);
  }
};