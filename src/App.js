import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar';
import ItemListComponent from './components/ItemListComponent';
import FunctionComponent from './components/FunctionComponent';
import girasol from './img/girasol.png';
function App() {
  return (
    <div className="App">
      <NavBar/>
     
    <ItemListComponent/>
   
    </div>
    
  );
}

export default App;
