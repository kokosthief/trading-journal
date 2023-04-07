import "../Trades/TradeDate.css";

const TradeDate = (props) => {
  const month = props.date?.toLocaleString("en-US", { month: "long" });
  const year = props.date?.getFullYear("en-US", { year: "2-digit" });
  const day = props.date?.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="trade-date">
      <div className="trade-date__year">{year}</div>
      <div className="trade-date__month">{month}</div>
      <div className="trade-date__day">{day}</div>
    </div>
  );
};

export default TradeDate;
