import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// hooks
import useIsAuth from "@/hooks/useIsAuth";

export default function ({ children }) {
  const navigate = useNavigate();

  const isAuth = useIsAuth();

  useEffect(() => {
    if (!isAuth) {
      navigate("/home");
    }
  }, [isAuth]);

  return <>{isAuth && children}</>;
}
