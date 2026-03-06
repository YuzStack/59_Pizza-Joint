import { Outlet } from 'react-router';
import Header from './Header';
import { useState } from 'react';

function App() {
  const [pizza, setPizza] = useState({ base: '', toppings: [] });

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
      <Outlet context={{ pizza, addBase, addTopping }} />
    </div>
  );
}

export default App;
