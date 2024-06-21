import React, { useEffect, useState } from 'react'

const DropDown =({selectedCrypto, setSelectedCrypto})=> {
    const [cryptos, setCryptos] = useState([]);

    const getCrypto =()=>{
        fetch('/cryptoSelector.json',
            {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){
            setCryptos(myJson);
        })
    }

    useEffect(()=>{
        getCrypto()
    }, [])

  return (
    <div className="container m-4">
      <div className="row justify-content-center">
        <div className="col-md-6 offset-md-3">
          <div className="form-group" style={{fontWeight:'bold'}}>
            <label htmlFor="cryptoSelect" style={{marginBottom:5}}>Please select a crypto</label>
            <select className="form-control" style={{fontWeight:'bold'}} id="cryptoSelect" value={selectedCrypto} onChange={(coin) => setSelectedCrypto(coin.target.value)}>
              {cryptos.map((crypto) => (
                <option key={crypto.symbol} value={crypto.symbol}>
                  {crypto.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropDown
