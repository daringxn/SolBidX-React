import { useEffect, useState } from "react";

// stores
import useAuthStore from "@/stores/authStore";

export default function () {
  const [isAuth, setIsAuth] = useState(false);

  const user = useAuthStore();

  useEffect(() => {
    if (user.wallet_address) {
      setIsAuth(true);
    }
  }, [user]);

  return isAuth;
}
