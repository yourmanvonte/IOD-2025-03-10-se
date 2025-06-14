import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home'
import Login from '../components/Login'
import BitcoinRates from '../components/BitcoinRates'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bitcoin" element={<BitcoinRates />} />
    </Routes>
  );
};

export default AppRoutes;