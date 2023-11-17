import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Product";

function App() {
  const [login, setLogin] = useState(true);
  const [checkProduct, setCheckProduct] = useState(false);

  return (
    <ChakraProvider>
      <>
        {login ? (
          <>
            {checkProduct ? (
              <Products
                checkProduct={checkProduct}
                setCheckProduct={setCheckProduct}
              />
            ) : (
              <Login
                login={login}
                setLogin={setLogin}
                setCheckProduct={setCheckProduct}
              />
            )}
          </>
        ) : (
          <Register login={login} setLogin={setLogin} />
        )}
      </>
    </ChakraProvider>
  );
}

export default App;
