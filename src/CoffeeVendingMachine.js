import React, { useState } from "react";

const CoffeeVendingMachine = () => {
  const [quantities, setQuantities] = useState({
    small: 0,
    medium: 0,
    large: 0,
  });
  const [showBill, setShowBill] = useState(false);

  const handleSelectSize = (size) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [size]: prevQuantities[size] + 1,
    }));
  };

  const calculateTotal = () => {
    const smallPrice = 2.5;
    const mediumPrice = 3.5;
    const largePrice = 4.5;

    const total =
      quantities.small * smallPrice +
      quantities.medium * mediumPrice +
      quantities.large * largePrice;
    return total.toFixed(2);
  };

  const handleAddMore = () => {
    setQuantities({ small: 0, medium: 0, large: 0 });
    setShowBill(false);
  };

  return (
    <div>
      <h2>Coffee Vending Machine</h2>

      {showBill ? (
        <div>
          <h3>Bill Breakdown</h3>
          <ul>
            <li>Small Coffee: {quantities.small}</li>
            <li>Medium Coffee: {quantities.medium}</li>
            <li>Large Coffee: {quantities.large}</li>
          </ul>
          <p>Total Amount: ${calculateTotal()}</p>
          <button onClick={handleAddMore}>AddMore</button>
        </div>
      ) : (
        <div>
          <button onClick={() => handleSelectSize("small")}>
            Select Small Coffee
          </button>
          <button onClick={() => handleSelectSize("medium")}>
            Select Medium Coffee
          </button>
          <button onClick={() => handleSelectSize("large")}>
            Select Large Coffee
          </button>
          <br />
          <button onClick={() => setShowBill(true)}>Show Bill</button>
        </div>
      )}
    </div>
  );
};

export default CoffeeVendingMachine;
