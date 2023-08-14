import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChatPage from './component/ChatPage/ChatPage';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/chat' element={<ChatPage/>} />
      </Routes>
    </div>
  );
}

export default App;
