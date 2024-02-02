import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./components/Authentication/LoginForm";
import RegisterForm from "./components/Authentication/RegisterForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
