import React, {useState, useEffect} from 'react';
import './App.css';

import { API } from 'aws-amplify';


function App() {
  const [coins, updateCoins] = useState([])

  async function fetchCoins() {
    const data = await API.get('testapi', '/coins')
    updateCoins(data.coins)
  }

  useEffect(() => {
    fetchCoins()
  }, [])

  return (
    <div className="App">
      {
        coins.map((coin, index) => (
          <div key={index}>
            <h2>{coin.name} - {coin.symbol}</h2>
            <h5>${coin.price_usd}</h5>
          </div>
        ))
      }
    </div>
  );
}

export default App;
