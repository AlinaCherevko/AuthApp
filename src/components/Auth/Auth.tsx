import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import RegisterForm from "../Form/RegisterForm";
import { setUser } from "../../store/AuthSlice";
import { AuthProps } from "../../types/types";
import { FirebaseError } from "firebase/app";

const Auth = () => {
  const dispatch = useDispatch();

  const handleSignUp = async ({ name, email, password }: AuthProps) => {
    const auth = getAuth();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);

      await updateProfile(user, { displayName: name });
      const token = await user.getIdToken();

      dispatch(
        setUser({
          name: user.displayName,
          email: user.email,
          token,
          id: user.uid,
        })
      );
      toast.success("Register successfully");
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast.error(`${error.code}`);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return <RegisterForm handleClick={handleSignUp} />;
};

export default Auth;
