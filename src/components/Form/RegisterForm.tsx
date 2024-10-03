import { Button, Input } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthProps, RegFormProps } from "../../types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaReg } from "../../schemas";

import style from "./Form.module.css";

function RegisterForm({ handleClick }: RegFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthProps>({
    resolver: yupResolver(schemaReg),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<AuthProps> = (data) => {
    handleClick(data);
    reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <Input placeholder="User name" {...register("name")} />
        {errors["name"]?.message && (
          <p className={style.text}>{errors["name"]?.message}</p>
        )}
      </div>

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

export default RegisterForm;
