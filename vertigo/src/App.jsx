import { useState } from "react";
import logoImg from "./assets/logo.svg";

export function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  function handleSumit(event) {
    event.preventDefault();
    let formIsValid = true;

//Validação E-mail
    if (!email) {
      newErrors.email = "O e-mail é obrigatório";
      formIsValid = false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Digite um e-mail válido";
      formIsValid = false;
    }

//Validação Senha
    if (!password) {
      newErrors.password = "A senha é obrigatório";
      formIsValid = false;
    }
    if(!password.length < 6){
      newErrors = "A senha deve ter pelo menos 6 caracteres.";
      formIsValid = false;
    }

//Garante que não seja enviado em caso de erros
    if(!formIsValid){
      setErrors(newErrors)
      return;
    }

    let newErrors = { email: "", password: "" };
    console.log("Email: ", email);
    console.log("Senha: ", password);
  }

  return (
    <div className="container">
      <div className="s-form">
        <img src={logoImg} alt="logoVertigo" />

        <h1>Acesse a plataforma</h1>

        <p>
          Faça login ou registre-se para começar a construir seus projetos ainda
          hoje.
        </p>

        <form onSubmit={handleSumit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div>
            <label htmlFor="password">Senha</label>
            <button type="button" className="forgot-btn">
              Esqueceu a senha?
            </button>
          </div>

          <input
            type="password"
            placeholder="Digite a sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="sumit-btn">
            Entrar
          </button>
        </form>

        <div className="sign-up">
          <p>
            Ainda não tem uma conta? <button type="button"> Inscreva-se</button>
          </p>
        </div>
      </div>
      <div className="s-right"></div>
    </div>
  );
}
