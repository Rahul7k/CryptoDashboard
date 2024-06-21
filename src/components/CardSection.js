import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function CardSection(props) {
    const [lastUpdatedDate, setLastUpdatedDate ] = useState("");
    const getCurrentDateTime = () => {
        const date = new Date();
        return date.toISOString();
    };

    function dateFormat() {
        const date = new Date(props.coinData.market_data ? props.coinData.market_data.last_updated: getCurrentDateTime());
        setLastUpdatedDate(format(date, 'dd-MM-yy HH:mm'));
    }
    useEffect(()=>{
        dateFormat()
    }, [lastUpdatedDate])
  return (
    <div className="container">

        <div className="row justify-content-center" style={{textAlign:'center'}}>
            <Card className="col-2 m-2 p-2 custom-class">
                <Card.Body>
                    <Card.Title>Market Cap Rank</Card.Title>
                    <Card.Text style={{color:'#ffff17', fontSize:30}}>{props.coinData.market_cap_rank}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="col-2 m-2 p-2 custom-class">
                <Card.Body>
                    <Card.Title>All Time High</Card.Title>
                    <Card.Text style={{color:'#ffff17', fontSize:30}}>₹ {props.coinData.market_data ? props.coinData.market_data.ath.inr : ""}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="col-2 m-2 p-2 custom-class">
                <Card.Body>
                    <Card.Title>24-HR High</Card.Title>
                    <Card.Text style={{color:'#4deb4d', fontSize:30}}>₹ {props.coinData.market_data ? props.coinData.market_data.high_24h.inr : ""}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="col-2 m-2 p-2 custom-class">
                <Card.Body>
                    <Card.Title>24-HR Low</Card.Title>
                    <Card.Text style={{color:'#eb614d', fontSize:30}}>₹ {props.coinData.market_data ? props.coinData.market_data.low_24h.inr :""}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="col-2 m-2 p-2 custom-class">
                <Card.Body>
                    <Card.Title>Last Updated</Card.Title>
                    <Card.Text style={{color:'#ffff17', fontSize:30}}>{lastUpdatedDate}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

        <div className="d-flex justify-content-center m-4">
            <img src={props.coinData.image ? props.coinData.image.large : ""} alt="cryptoImg" height={80} width={80} />
        </div>
        <div>
            <h5 className="text-center" style={{fontWeight:'bold'}}>Current Price</h5>
            <p className="text-center" style={{fontSize:60, fontWeight:'bold', color:'#038387'}}>₹ {props.coinData.market_data ? props.coinData.market_data.current_price.inr : ""}</p>
        </div>
        
    </div>
    
    
  );
}

export default CardSection;
