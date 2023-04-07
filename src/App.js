import Trades from './components/Trades/Trades';
import NewTrade from './components/NewTrade/NewTrade';

const App = () => {
  const trades = [
    {
      date: new Date(2020, 7, 14),
      name: "Toilet",
      ticker: "E1",
      pnl: 94.12,
    },
    { date: new Date(2021, 2, 12), ticker: "e2", name: "New TV", pnl: 799.49 },
    {
      date: new Date(2021, 2, 28),
      name: "Car",
      ticker: "E3",
      pnl: 294.67,
    },
    {
      date: new Date(2021, 5, 12),
      name: "New",
      ticker: "E34",
      pnl: 450,
    },
  ];

  return (
    <div>
      <h2>Trading Diary</h2>
      <NewTrade />
      <Trades items={trades} />
    </div>
  );
}

export default App;
