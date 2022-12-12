import logo from './logo.svg';
import './App.css';
import Greet from './components/login';
import Secondpage from './components/secondpage';
import {BrowserRouter as Router,Route,Routes}from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'element={Secondpage}/>
        </Routes>
      </Router>
      <Greet />
    </div>
  );
}
export default App;
