import { Routes,Route } from 'react-router-dom';
import './App.css';
import List from './components/LIst';
import UserData from './components/UserData';


function App() {
  return (
    <div className="App">
      <div className='search-bar-container'>
      <Routes>
        <Route path="/" element={<List/>}/>
        <Route path="/user/:id" element={<UserData/>}/>
      </Routes>
      </div>  
    </div>
  );
}

export default App;




