# Welcome to the Merry-Money!

### Overview

Merry-Money is a clone of Robinhood, an app that allows you to invest in the stock market for free. You can research companies, put them on a watchlist to keep an eye on performance, and buy and sell.

[Live Site](http://merry-money.herokuapp.com/#/)

### Technologies Used
* Frontend: React/Redux
* Backend: Rails/ActiveRecord/PostgreSQL
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
   * Tags and collections to find/compare similar companies
   * Realtime portfolio value tracking
   * Dashboard news tailored to portfolio holdings
   * Responsive site
   * Optimize batch requests to IEX API for faster loading


### Demos

##### Portfolio/Dashboard

<img src="https://media.giphy.com/media/kW9AKrCobad2hO18nh/giphy.gif"
alt="stock details" width="480" height="262" />
cd
##### Stock Details

<img src="https://media.giphy.com/media/3kzuuuvw4k6qkaR2Wa/giphy.gif"
alt="stock details" width="480" height="262" />


### Code Samples

##### Search

Debouncing on search to prevent an AJAX call for each key press. Uses timeout to wait .5 seconds after the last key stroke to fetch data.

```javascript
handleInput(e){
  e.preventDefault();
  this.setState({inputVal: e.currentTarget.value});
  if (this.timeoutId) {
    clearTimeout(this.timeoutId);
  }
  this.timeoutId = setTimeout(()=> {
    this.props.fetchSearch(this.state.inputVal).then((action)=> {
      this.setState({searched:Object.values(action.companies)});
    });},500);
}
```

Highlighting selected search option based on up and down arrow presses as well as hovering with the mouse and submitting correct search on enter or click.

```javascript
  handleKeyDown(e){
    if (e.key === "Enter") {
      let newId = this.state.searched[this.state.searchIdx].id;
      this.props.history.push(`/stocks/${newId}`);
      this.setState({inputVal:''});
      this.setState({searched: []});
    } else if (e.key === "ArrowDown") {
      if (this.state.searchIdx < this.state.searched.slice(0,10).length-1) {
        let newIdx = (this.state.searchIdx + 1);
        this.setState({searchIdx: newIdx});
      }
    } else if (e.key === "ArrowUp") {
      if (this.state.searchIdx === 0) {
        this.setState({searchIdx: 0});
      } else {
        let newIdx = (this.state.searchIdx - 1);
        this.setState({searchIdx: newIdx});
      }
    } else {
      this.setState({searchIdx: 0});
    }

  }
```
```javascript
handleMouse(e){
  let idx = parseInt(e.currentTarget.attributes.class.value);
  if (!isNaN(idx)) {
    this.setState({searchIdx: idx});
  }

}
```
