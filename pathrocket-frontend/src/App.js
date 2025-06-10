import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoverLetterList from './pages/CoverLetters/CoverLetterList';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/coverletters" element={<CoverLetterList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
