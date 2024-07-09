import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

// components
import Preloader from "./components/elements/Preloader";

// router
import router from "./router";

// config
import "./config/i18n";
import store from "./config/store";

// styles
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <Provider store={store}>
      {!loading ? <RouterProvider router={router} /> : <Preloader />}
    </Provider>
  );
}

export default App;
