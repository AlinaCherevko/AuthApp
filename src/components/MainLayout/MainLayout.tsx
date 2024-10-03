import { Button } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks";

import style from "./MainLayout.module.css";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/AuthSlice";

function MainLayout() {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  return (
    <>
      <div className={style.header}>
        <NavLink to="/">HomePage</NavLink>

        {isAuth ? (
          <NavLink to="/content">ContentPage</NavLink>
        ) : (
          <>
            <NavLink to="/register">Registration</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
          </>
        )}

        {isAuth && (
          <div className={style.wrapper}>
            <Button type="button" onClick={() => dispatch(removeUser())}>
              Log out
            </Button>
            <p>{email}</p>
          </div>
        )}
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
