import TradeItem from "../Trades/TradeItem";
import Card from '../UI/Card';
import '../Trades/Trades.css';

const Trades = (props) => {

    return (
        <Card className="trades">
            <TradeItem
                date={props.items[0].date}
                name={props.items[0].name}
                ticker={props.items[0].ticker}
                pnl={props.items[0].pnl} 
            />
            <TradeItem
                date={props.items[1].date}
                name={props.items[1].name}
                ticker={props.items[1].ticker}
                pnl={props.items[1].pnl} 
            />
            <TradeItem
                date={props.items[2].date}
                name={props.items[2].name}
                ticker={props.items[2].ticker}
                pnl={props.items[2].pnl} 
            />
        </Card>
    )

}

export default Trades;