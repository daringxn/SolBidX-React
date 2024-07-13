import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";

// components
import Preloader from "./components/elements/Preloader";

// router
import router from "./router";

// config
import "./config/i18n";

// styles
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return <>{!loading ? <RouterProvider router={router} /> : <Preloader />}</>;
}

export default App;
