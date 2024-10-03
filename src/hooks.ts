import { useSelector } from "react-redux";
import { RootState } from "./store/store";

export function useAuth() {
  const { name, email, token, id } = useSelector(
    (state: RootState) => state.user
  );

  return {
    isAuth: !!email,
    name,
    email,
    token,
    id,
  };
}
