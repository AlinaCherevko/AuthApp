import { Navigate } from "react-router";
import { useAuth } from "../../hooks";
import { Route } from "../../types/types";

function PrivateRoute({ children, redirectTo = "/signin" }: Route) {
  const { isAuth } = useAuth();

  return isAuth ? children : <Navigate to={redirectTo} replace />;
}

export default PrivateRoute;
