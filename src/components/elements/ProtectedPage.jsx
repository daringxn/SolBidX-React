// hooks
import useIsAuth from "@/hooks/useIsAuth";

// pages
import Home from "@/pages/home";

export default function ({ children }) {
  const isAuth = useIsAuth();

  return <>{isAuth ? children : <Home />}</>;
}
