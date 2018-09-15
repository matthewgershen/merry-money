import React from 'react';


const CompanyInfo = (props) =>{
  return(
    <div>

      {props.stockInfo.company.tags.map((tag,idx)=>{
        return <p key={idx}>{tag}</p>
      })}

      <p>{props.stockInfo.company.companyName}</p>
      <p>{props.stockInfo.quote.latestPrice}</p>

      <h1>About</h1>
      <h3>{props.stockInfo.company.description}</h3>
      <p>{props.stockInfo.company.CEO}</p>
      <p>{props.stockInfo.quote.peRatio}</p>
      <p>{props.stockInfo.quote.week52High}</p>
      <p>{props.stockInfo.quote.week52Low}</p>
      <p>{props.stockInfo.quote.avgTotalVolume}</p>
      <p>{props.stockInfo.quote.iexVolume}</p>
      <p>{props.stockInfo.quote.High}</p>
      <p>{props.stockInfo.quote.Low}</p>
      <p>{props.stockInfo.quote.Open}</p>
      <p>{props.stockInfo.quote.marketCap}</p>





    </div>
  );
};


export default CompanyInfo;
