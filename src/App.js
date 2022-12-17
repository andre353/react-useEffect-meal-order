import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <>
      <Cart />
      <Header>Let's get started!</Header>
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
