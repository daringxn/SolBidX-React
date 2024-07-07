import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

// components
import Layout from "./components/layout/Layout";
import AddClassBody from "./components/elements/AddClassBody";
import Preloader from "./components/elements/Preloader";


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <BrowserRouter>
      {!loading ? (
        <>
          <AddClassBody />
          <Layout headerStyle={1} footerStyle={1}>
            
          </Layout>
        </>
      ) : (
        <Preloader />
      )}
    </BrowserRouter>
  );
}

export default App;
