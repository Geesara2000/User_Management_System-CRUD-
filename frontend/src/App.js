import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wellcome </h1>
        <button className='users-btn' onClick={() => navigate('/Users')} >Users</button>
      </header>
    </div>
  );
}

export default App;
