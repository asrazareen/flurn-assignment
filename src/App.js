import './App.css';
import {BrowserRouter , Route , Routes} from "react-router-dom"
import SearchPage from './Components/SearchPage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<SearchPage/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
