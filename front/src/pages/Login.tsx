import FormContainer from "../components/FormContainer";
import Input from "../components/Input";
import Button from "../components/Button";
import CustomLink from "../components/CustomLink";
import { useNavigate } from "react-router-dom";
import CenteredContainer from "../components/CenteredContainer";
import { AuthRegisterContext } from "../context/AuthRegister/AuthRegister.context";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ILoginProps } from "../context/AuthRegister/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/users.schemas";
import { toast } from "react-toastify";

const Login = () => {
  const { login } = useContext(AuthRegisterContext);

  const {
    register,
    handleSubmit,
  } = useForm<ILoginProps>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: undefined,
      password: undefined,
    },
  });

  const navigate = useNavigate();

  const handleLogin = async (data: ILoginProps) => {
    const response = await toast.promise(login(data), {
      pending: "Validando informações",
      success: "Bem vindo!",
      error: "Ops, Algo deu errado!"
    });

    if (response) {
      localStorage.setItem("@softline_token", JSON.stringify(response.token));

      navigate("/dashboard");
    }
  };

  return (
    <CenteredContainer>
      <img src="/logo.png" alt="Softline" />
      <FormContainer onSubmit={handleSubmit(handleLogin)}>
        <h3>Login</h3>

        <Input
          placeholder="Digite seu email"
          {...register("email")}
          filled=""
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
          filled=""
        />

        <span>
          Não tem conta ? <CustomLink to={"/register"}>Registre-se</CustomLink>
        </span>

        <Button variant="positive" type="submit">
          Entrar
        </Button>
      </FormContainer>
    </CenteredContainer>
  );
};

export default Login;
