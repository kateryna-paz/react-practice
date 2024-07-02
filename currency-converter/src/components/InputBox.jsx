/* eslint-disable react/prop-types */
import { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  className = "",
}) => {
  const id = useId();

  const options = currencyOptions.map((c) => {
    return (
      <option key={c} value={c}>
        {c}
      </option>
    );
  });
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <label htmlFor={id} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={id}
          type="number"
          placeholder="Amount"
          className="outline-none w-full bg-transparent py-1.5"
          disabled={amountDisabled}
          value={amount.toFixed(2)}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right ml-4">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {options}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
