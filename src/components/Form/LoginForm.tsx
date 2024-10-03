import { Button, Input } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthProps, LoginFormProps } from "../../types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLog } from "../../schemas";
import style from "./LoginForm.module.css";

function LoginForm({ handleClick }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Omit<AuthProps, "name">>({
    resolver: yupResolver(schemaLog),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<Omit<AuthProps, "name">> = (data) => {
    handleClick(data);
    reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <Input placeholder="User email" {...register("email")} />
        {errors["email"]?.message && (
          <p className={style.text}>{errors["email"]?.message}</p>
        )}
      </div>

      <div>
        <label>Password</label>
        <Input placeholder="Password" {...register("password")} />
        {errors["password"]?.message && (
          <p className={style.text}>{errors["password"]?.message}</p>
        )}
      </div>
      <Button type="submit" colorScheme="teal" size="md">
        Button
      </Button>
    </form>
  );
}

export default LoginForm;
