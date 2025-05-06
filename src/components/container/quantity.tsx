import React from "react";
import { Button } from "../ui/button";

type QuantityProps = {
  quantity: number;
  min?: number;
  max?: number;
  onChange: (newQuantity: number) => void;
};

const Quantity = ({ quantity, min = 1, max = 10, onChange }: QuantityProps) => {
  const handleDecrement = () => {
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center border rounded-md overflow-hidden">
      <Button
        size="sm"
        variant="ghost"
        disabled={quantity <= min}
        onClick={handleDecrement}
      >
        –
      </Button>
      <span className="px-3 text-sm">{quantity}</span>
      <Button
        size="sm"
        variant="ghost"
        disabled={quantity >= max}
        onClick={handleIncrement}
      >
        +
      </Button>
    </div>
  );
};

export default Quantity;
