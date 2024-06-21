import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Cryptocurrencies() {
  const [loading, setLoading] = useState(true);
  const [allCrypto, setAllCryptos] = useState([]);
  const getAllCryptos = async () => {
    setLoading(true);
    await axios
      .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr`, {
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-AFwxH9Wf5oUxLhhpRL2hnK1C",
        },
      })
      .then((response) => {
        setAllCryptos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getAllCryptos();
  }, []);
  const DisplayData = allCrypto.map((info) => {
    return (
      <tr>
        <td>{info.market_cap_rank}</td>
        <td><img style={{height:30, width:30}} src={info.image} alt="cryptoImg"></img></td>
        <td>{info.name}</td>
        <td>{info.symbol}</td>
        <td>{info.current_price}</td>
        <td>{info.market_cap}</td>
      </tr>
    );
  });

  return (
    <div style={{padding:40}}>
      <div style={{textAlign:'center', margin:20}}>
        <h3 style={{fontWeight:'bold'}}>Top 100 Cryptocurrencies</h3>
      </div>
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </Table>
    </div>
  );
}

export default Cryptocurrencies;
