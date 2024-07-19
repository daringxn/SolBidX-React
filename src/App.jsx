import { RouterProvider } from "react-router-dom";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

// providers
import WalletContextProvider from "./providers/Providers";
import AuthProvider from "./providers/AuthProvider";

// router
import router from "./router";

// config
import "./config/i18n";

// styles
import "./App.css";

function App() {
  return (
    <WalletContextProvider>
      <WalletModalProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </WalletModalProvider>
    </WalletContextProvider>
  );
}

export default App;
