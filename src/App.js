import './App.css';
import ListProdutos from './componentes/ListProdutos';
import produtos from './data/produtos.json';

function App() {
  return (
    <>
    <div className="w3-container w3-teal">
      <h1>Hello World</h1>
    </div>
    <ListProdutos produtos={produtos}></ListProdutos>
    </>
);
}

export default App;
