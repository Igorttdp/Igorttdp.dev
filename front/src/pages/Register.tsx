import Button from "../components/Button";
import CenteredContainer from "../components/CenteredContainer";
import FormContainer from "../components/FormContainer";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import {
  ConfirmPassword,
  ICreateUser,
} from "../context/AuthRegister/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/users.schemas";
import { useContext } from "react";
import { AuthRegisterContext } from "../context/AuthRegister/AuthRegister.context";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const { register: registerUser } = useContext(AuthRegisterContext);

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<ICreateUser<ConfirmPassword>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: undefined,
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
    },
  });

  const handleRegister = async (data: ICreateUser<ConfirmPassword>) => {
    const handledData: ICreateUser = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    await toast.promise(registerUser(handledData), {
      pending: "Validando informações",
      success: "Registrado com sucesso!",
      error: "Ops, Algo deu errado!",
    });

    toast.info("Redirecionando para Login...", {autoClose: 2000});

    setTimeout(() => {
      navigate("/");
    }, 3000);

  };

  return (
    <CenteredContainer>
      <img src="/logo.png" alt="Softline" />

      <FormContainer height="45rem" onSubmit={handleSubmit(handleRegister)}>
        <BackButton path="/" />

        <h3>Registre-se</h3>

        <Input placeholder="Nome" {...register("name")} filled="" />
        <Input placeholder="Email" {...register("email")} filled="" />
        <Input
          type="password"
          placeholder="Senha"
          {...register("password")}
          filled=""
        />
        <Input
          type="password"
          placeholder="Confirmar Senha "
          {...register("confirmPassword")}
          filled=""
        />

        <Button disabled={isSubmitting ? true : false} type="submit">
          Confirmar
        </Button>
      </FormContainer>
    </CenteredContainer>
  );
};

export default Register;
