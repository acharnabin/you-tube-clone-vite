import "./App.css";

import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import Home from "./pages/Home";
import CardDetails from "./components/CardDetails";
import RootLayout from "./layout/RootLayout";
import ProtectedLayout from "./layout/ProtectedLayout";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      {/** ROUTES WILL GO HERE */}
      <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="products" element={<RootLayout />}>
          <Route
            index
            element={
              <ProtectedLayout>
                <Home />
              </ProtectedLayout>
            }
          />
          <Route path=":id" element={<CardDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
