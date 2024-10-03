import Auth from "../../components/Auth/Auth";
import style from "./RegisterPage.module.css";

function RegisterPage() {
  return (
    <div className={style.wrapper}>
      <h1>Sign up</h1>
      <Auth />
      <p>
        Already have an account? <a href="/signin">Sign in</a>
      </p>
    </div>
  );
}

export default RegisterPage;
