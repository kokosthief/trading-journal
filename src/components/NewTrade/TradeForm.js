import React, { useState } from "react";
import "./TradeForm.css";

const TradeForm = () => {
  const [enteredToken, setEnteredToken] = useState("");
  const [enteredTicker, setEnteredTicker] = useState("");
  const [enteredPnL, setEnteredPnL] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredToken: "",
  //     enteredTicker: "",
  //     enteredPnL: "",
  //     enteredDate: "",
  //   });
  const tokenChangeHandler = (event) => {
    setEnteredToken(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredToken: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredToken: event.target.value };
    // });
  };
  const tickerhangeHandler = (event) => {
    setEnteredTicker(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredPnL(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <form>
      <div className="new-trade__controls">
        <div className="new-trade__control">
          <label>Token</label>
          <input type="text" onChange={tokenChangeHandler} />
        </div>
        <div className="new-trade__control">
          <label>Ticker</label>
          <input type="text" onChange={tickerhangeHandler} />
        </div>
        <div className="new-trade__control">
          <label>PnL</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-trade__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            step="2024-12-25"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-trade__actions">
        <button type="submit">Add Trade</button>
      </div>
    </form>
  );
};

export default TradeForm;
