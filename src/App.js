import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar';
import ItemListComponent from './components/ItemListComponent';
import FunctionComponent from './components/FunctionComponent';
import girasol from './img/girasol.png';
import ProductsContainer from './components/ProductsContainer';
import Products from './components/Products';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ProductsContainer/>   
    </div>
    
  );
}

export default App;
