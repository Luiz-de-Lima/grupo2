import logo from './logo.svg';
import './App.css';
import Cards from './components/cards';
import { Sidebar } from './components/SideBar';
import api from './services/api';


function App() {
  return (
    <div className="App">
      <Sidebar/>
     <Cards/>
    </div>
  );
}

export default App;
