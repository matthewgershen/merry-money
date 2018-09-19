import React from 'react';


const CompanyInfo = (props) =>{
  const vol = (!props.stockInfo.quote.avgTotalVolume) ?  "-" : props.stockInfo.quote.avgTotalVolume.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  const highToday = (!props.stockInfo.quote.high) ?  "-" : props.stockInfo.quote.high.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  const lowToday = (!props.stockInfo.quote.low) ?  "-" : props.stockInfo.quote.low.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  const openPrice = (!props.stockInfo.quote.open) ?  "-" : props.stockInfo.quote.open.toLocaleString('en-US', {style: 'currency', currency: 'USD'})


  return(
    <div>
      <div className="about">
        <div className="info-section-header">
          <h2>About</h2>
        </div>
        <h5>{props.stockInfo.company.description}</h5>
        <div className="info-grid">
          <div>
            <span>CEO</span>
            <p>{props.stockInfo.company.CEO}</p>
          </div>
          <div>
            <span>Price-Earnings Ratio</span>
            <p>{props.stockInfo.quote.peRatio}</p>
          </div>
          <div>
            <span>52 Week High</span>
            <p>{props.stockInfo.quote.week52High.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
          </div>
          <div>
            <span>52 Week Low</span>
            <p>{props.stockInfo.quote.week52Low.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
          </div>
          <div>
            <span>Average Volume</span>
            <p>{vol}</p>
          </div>
          <div>
            <span>Volume</span>
            <p>{props.stockInfo.quote.iexVolume}</p>
          </div>
          <div>
            <span>High Today</span>
            <p>{highToday}</p>
          </div>
          <div>
            <span>Low Today</span>
            <p>{lowToday}</p>
          </div>
          <div>
            <span>Open Price</span>
            <p>{openPrice}</p>
          </div>
          <div>
            <span>Market Cap</span>
            <p>{props.stockInfo.quote.marketCap.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
          </div>
        </div>
      </div>


    

    </div>


  );
};


export default CompanyInfo;
