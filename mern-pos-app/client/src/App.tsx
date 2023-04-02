import { BrowserRouter, Route, Routes } from "react-router-dom";
import BillPage from "./pages/BillPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import CustomerPage from "./pages/CustomerPage";
import StatisticPage from "./pages/StatisticPage";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/bills" element={<BillPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/statistic" element={<StatisticPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
