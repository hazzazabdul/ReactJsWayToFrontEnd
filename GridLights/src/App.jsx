import { useState } from "react";
import Cell from "./components/Cell";

const App = () => {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDectivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactivatedCells = () => {
    setIsDectivating(true);
    const timer = setInterval(() => {
      setOrder((prevOrder) => {
        const newOrder = prevOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDectivating(false)
        }
        return newOrder
      });
    }, 300);
  };

  const activetedCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    console.log(newOrder);

    // deactivated
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivatedCells();
    }
  };

  return (
    <div className="wrapper">
      <h1>Grid Lights</h1>
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        }}
      >
        {config
          .flat(1)
          .map((value, index) =>
            value ? (
              <Cell
                key={index}
                filled={order.includes(index)}
                onClick={() => activetedCells(index)}
                isDisable={order.includes(index) || isDeactivating}
              />
            ) : (
              <span key={index}></span>
            )
          )}
      </div>
    </div>
  );
};

export default App;
