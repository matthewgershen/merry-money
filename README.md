# Welcome to the Merry-Money!

### Overview

Merry-Money is a clone of Robinhood, an app that allows you to invest in the stock market for free. You can research companies, put them on a watchlist to keep an eye on performance, and of course buy and sell.

[Live Site](http://merry-money.herokuapp.com/#/)

### Technologies Used
* Frontend: Rails/ActiveRecord/PostgreSQL
* Backend: React/Redux
* [IEX API](https://iextrading.com/)
* [News API](https://newsapi.org/)
* [Recharts](http://recharts.org/en-US/)
* [HTTParty](https://github.com/jnunemaker/httparty)

### Features Implemented
* Dashboard: Track Port
* Asset/Stock Detail
* Watchlist
* Asset/Stock Search
* New account creation, login, and guest/demo login

   ##### Future development

   * Detailed portfolio information
   * More stock detail for analysis
   * Tags and collections to compare like companies
   * Realtime portfolio value tracking
   * Dashboard news tailored to portfolio holdings
   * Responsive site


### Demos

##### Portfolio/Dashboard

*giphy here*

##### Stock Details

*giphy here*


### Code Samples

##### Search

Debouncing on search to prevent an AJAX call for each key press. Uses timeout to wait .5 seconds after the last key stroke to fetch data.

*code snippet here*

Highlighting selected search option based on up and down arrow presses as well as hovering with the mouse and submitting correct search on enter or click.

*code snippet here*
