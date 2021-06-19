import "./App.css";
import ItemsContextProvider from "./Store/itemscontext";
import Product from './components/Items';
function App() {
  

  return (
    <ItemsContextProvider>
      <Product />
     </ItemsContextProvider>
  );
}

export default App;
