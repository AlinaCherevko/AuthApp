import { Navigate } from "react-router";
import { useAuth } from "../../hooks";
import { Route } from "../../types/types";

function RestrictedRoute({ children }: Omit<Route, "redirectTo">) {
  const { isAuth } = useAuth();

  return isAuth ? <Navigate to="/content" replace /> : children;
}

export default RestrictedRoute;
