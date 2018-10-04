import React from 'react';
import Stocklist from './../holdings/stock_list';
import Watchlist from './../watchlist/watchlist';


const StockWatch = () =>{
  return(
    <div className="stock-watch">
      <Stocklist />
      <Watchlist />
    </div>

  );
};


export default StockWatch;
