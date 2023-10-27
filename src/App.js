import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import CategoriesPage from './pages/CategoriesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegistrationPage />} />
        <Route path='/category' element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
