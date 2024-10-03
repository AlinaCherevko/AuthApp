import { Route, Routes } from "react-router";
import "./App.css";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import HomePage from "./pages/HomePage/HomePage";
import MainLayout from "./components/MainLayout/MainLayout";
import ContentPage from "./pages/ContentPage/ContentPage";
//import { useAuth } from "./hooks";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  //const { isAuth } = useAuth();
  //console.log(isAuth);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <RegisterPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute>
              <SignInPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/content"
          element={
            <PrivateRoute>
              <ContentPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
