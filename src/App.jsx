import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Page/Home';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    if (!token) {
      navigate('/login');
    }
  }, []);
  return (
    <div className="min-h-screen">
      <Home />
    </div>
  );
}

export default App;
