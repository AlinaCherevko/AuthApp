import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import LoginForm from "../Form/LoginForm";
import { setUser } from "../../store/AuthSlice";
import { AuthProps } from "../../types/types";
import { FirebaseError } from "firebase/app";

export const LogIn = () => {
  const dispatch = useDispatch();

  const handleLogin = async ({ email, password }: Omit<AuthProps, "name">) => {
    const auth = getAuth();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);

      const token = await user.getIdToken();
      dispatch(
        setUser({
          name: user.displayName,
          email: user.email,
          token,
          id: user.uid,
        })
      );
      toast.success("Log in successfully");
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast.error(`${error.code}`);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return <LoginForm handleClick={handleLogin} />;
};

export default LogIn;
