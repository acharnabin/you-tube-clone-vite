import "./App.css";

import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import Home from "./pages/Home";
import CardDetails from "./components/CardDetails";
import RootLayout from "./layout/RootLayout";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Test from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      {/** ROUTES WILL GO HERE */}
      <Routes>
      <Route path="test" element={<Test />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<CardDetails />} />
        </Route>
        <Route path="users" element={<RootLayout />}>
          <Route index element={<Users />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
