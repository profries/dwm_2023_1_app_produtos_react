import './App.css';
import produtos from './data/produtos.json';
import CardProduto from './componentes/CardProduto';

function App() {
  return (
    <>
    <div className="w3-container w3-teal">
      <h1>Hello World</h1>
    </div>
    <CardProduto 
      produto = {produtos[0]}>
    </CardProduto>
    </>
);
}

export default App;
