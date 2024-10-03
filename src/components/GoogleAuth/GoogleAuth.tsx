import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/AuthSlice";
import GoogleBtn from "../GoogleBtn/GoogleBtn";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";

const GoogleAuth = () => {
  const dispatch = useDispatch();

  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try {
      const { user } = await signInWithPopup(auth, provider);
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
      toast.success("Logged in with Google successfully");
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error);
        toast.error(`${error.code}`);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return <GoogleBtn handleClick={handleSignInWithGoogle} />;
};

export default GoogleAuth;
