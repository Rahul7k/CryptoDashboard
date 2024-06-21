import React, { useEffect, useState } from 'react'
import DropDown from './DropDown';
import CardSection from './CardSection';
import ChartSection from './ChartSection';
import NavbarHeader from './NavbarHeader';
function Home() {
    const [ID, setId] = useState("bitcoin");
  const [Data, setData] = useState({});
  const [MarketChartData, setMarketChartData] = useState([]);

  const fetchData = async () => {
    let data = await fetch(`https://api.coingecko.com/api/v3/coins/${ID}`);
    let jsonData = await data.json();
    setData(jsonData);
    console.log(jsonData);
  };

  const fetchMarketChartData = async ()=>{
    let marketData = await fetch(`https://api.coingecko.com/api/v3/coins/${ID}/market_chart?vs_currency=inr&days=365`);
    let marketJsonData = await marketData.json();
    setMarketChartData(marketJsonData);
    console.log(marketJsonData);
  }

  useEffect(() => {
    if(ID){
      fetchData();
      fetchMarketChartData();
    }
  }, [ID]);
  return (
    <div>
      <DropDown selectedCrypto={ID} setSelectedCrypto={setId}/>
      <CardSection coinData={Data} />
      <ChartSection marketChartData={MarketChartData}/>
    </div>
  )
}

export default Home
