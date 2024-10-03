import LogIn from "../../components/Login/Login";
import style from "./SignInPage.module.css";
import GoogleAuth from "../../components/GoogleAuth/GoogleAuth";

function SignInPage() {
  return (
    <div className={style.wrapper}>
      <h1>Sign in</h1>
      <LogIn />
      <p>
        Don't have an account? <a href="/register">Sign up</a>
      </p>
      <GoogleAuth />
    </div>
  );
}

export default SignInPage;
