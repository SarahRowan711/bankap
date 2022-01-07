//default imports
import logo from './logo.svg';
import './App.css';

//additional imports...
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <HashRouter>
      <NavBar/>
    </HashRouter>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

export default App;
