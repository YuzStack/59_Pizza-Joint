import { Outlet } from 'react-router';
import Header from './Header';
import { useState } from 'react';
import Modal from './Modal';

function App() {
  const [pizza, setPizza] = useState({ base: '', toppings: [] });
  const [showModal, setShowModal] = useState(false);

  const addBase = function (base) {
    setPizza(curPizza => ({ ...curPizza, base }));
  };

  const addTopping = function (topping) {
    const toppingExist = pizza.toppings.includes(topping);
    if (toppingExist)
      return setPizza(curPizza => ({
        ...curPizza,
        toppings: curPizza.toppings.filter(top => top !== topping),
      }));

    setPizza(curPizza => ({
      ...curPizza,
      toppings: [...curPizza.toppings, topping],
    }));
  };

  return (
    <div>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Outlet context={{ pizza, addBase, addTopping, setShowModal }} />
    </div>
  );
}

export default App;
