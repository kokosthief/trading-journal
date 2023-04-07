import React, { useState } from 'react';

import TradeDate from '../Trades/TradeDate';
import Card from '../UI/Card';
import '../Trades/TradeItem.css';

const TradeItem = (props) => {
  const [name, setName] = useState(props.name);

  const clickHandler = () => {
    setName('Updated');
  };

  return (
    <Card className="trade-item">
      <TradeDate date={props.date}></TradeDate>
      <div className="trade-item__description">
        <h2>${name}</h2>
        <h2>${props.ticker}</h2>
        <div className="trade-item__pnl">${props.pnl}</div>
        <button onClick={clickHandler}>Change Name</button>
      </div>
    </Card>
  );

}

export default TradeItem;
