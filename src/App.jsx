import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";

// components
import Preloader from "./components/elements/Preloader";
import WalletContextProvider from "./providers/Providers.jsx";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
// router
import router from "./router";

// config
import "./config/i18n";

// styles
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);
  }, []);
  return (
    <WalletContextProvider>
      <WalletModalProvider>
        {!loading ? <RouterProvider router={router} /> : <Preloader />}
      </WalletModalProvider>
    </WalletContextProvider>
  );
}

export default App;
