import React, {useEffect, useState} from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

function MainRoute() {

  const [cryptolist, setCryptolist] = useState([]);

  let navigate = useNavigate();

  useEffect (() => {
    Axios.get('https://api.coinlore.net/api/tickers/?start=0&limit=20').then((response) => {
      setCryptolist(response.data['data'])
      console.log(response.data['data'])
    })
  }, [])
  return (
    <>
      <div id="header">
        <h1>CryptoForum</h1>
      </div>
      <div className="cryptolist">
        {cryptolist.map((coin) => {
          return <div onClick={() => {navigate(`/currency/${coin.id}`)}}>
            <h1>{coin.symbol}</h1>
            <h1>{coin.price_usd}</h1>
          </div>
        })}
      </div>
    </>    
  );
}

export default MainRoute;
