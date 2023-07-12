import {useEffect, useState} from 'react'
import Table from './components/Table';
import { Route, BrowserRouter, Routes as Switch } from 'react-router-dom';
import FilteredTable from './components/FilteredTable';

const WS_URL = 'wss://ws.bitmex.com/realtime?subscribe=orderBookL2_25:XBTUSD';

const request = {
  "op": 'subscribe'
};

function App() {

  const [ws, setWs] = useState(null);
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const wsClient = new WebSocket(WS_URL);

    wsClient.onopen = () => {
      setWs(wsClient);
      wsClient.send(JSON.stringify(request));
    };

    wsClient.onclose = () => console.log('ws closed');
    return () => {
      wsClient.close();
    };

  }, []);

  useEffect(() => {
    if (ws) {
      ws.onmessage = (evt) => {
        const trade = JSON.parse(evt.data);
        const newTrades = [...trades];
        addTradeToList(trade, newTrades);
      };
    }
  }, [ws, trades]);

  const addTradeToList = (trade, newTrades) => {
    if (newTrades.length >= 20) {
      newTrades.shift();
      newTrades.push(trade);
      setTrades(newTrades);
    } else {
      newTrades.push(trade);
      setTrades(newTrades);
    }
  };

  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" element={<Table trades={trades}/>} />
          <Route path="/filteredTable" element={<FilteredTable/>}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
