import React from 'react';
import { Link } from 'react-router-dom';


const Splash = () => (
  <div className="splash-wrapper">

    <section className="section-1">
      <div className="text-container">
        <h1>Investing.</h1>
        <h1>Now for the rest of us.</h1>
        <h4>  Robinhood lets you learn to invest in the stock market for free.</h4>
        <Link className="button-link" to='/signup'>Sign Up</Link>
      </div>
      <video autoPlay loop muted>
          <source src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home_redesign/iPhone_header.mp4"/>
      </video>
    </section>

    <section className="section-2">
      <video autoPlay loop muted>
          <source src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home_redesign/Android_trading.mp4"/>
      </video>
      <div className="text-container">
        <h2>Invest for free.</h2>
          <p>
            We believe that the financial system should work for the rest  of us, not just the wealthy.
          </p>
          <p>
            We’ve cut the fat that makes other brokerages costly, like  manual account management and hundreds of storefront locations,   so we can offer zero commission trading.
          </p>
          <p className="quote">
            Absolutely the best way to trade in the market, simple, free  and fast. No more paying to invest my own money!
          </p>
          <p className="quote-author">David from Williamsburg, KY</p>
      </div>

    </section>

    <section className="section-3">
      <div className="text-container">
        <h2>No manual needed.</h2>
          <p>
            We’ve designed Robinhood from the ground up for the next generation of newcomers and experts alike.
          </p>
          <p>
            It’s fast, dead simple and just works.
          </p>
          <p className="quote">
            Great app, easy to use. Intuitive interface.
          </p>
          <p className="quote-author">Pradan from Raleigh, NC</p>
      </div>
      <img className="phone-grid" src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home_redesign/PhoneGrid.png"/>
    </section>

    <section className="section-4">
      <video autoPlay loop muted>
          <source src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home_redesign/PhoneDoing.mp4"/>
      </video>
      <div className="text-container">
        <h2>Learn by doing.</h2>
          <p>
            With Robinhood, you can learn to invest in the stock market as you build out your portfolio.
          </p>
          <p>
            Discover new stocks through Collections, track your favorites with a personalized news feed, and more.
          </p>
          <p className="quote">
            Definitely a great stock trading starter kit!
          </p>
          <p className="quote-author">Jerry from Chicago</p>
      </div>
    </section>

    <section className="section-5">
      <div className="security-text-container">
        <h2>Trusted by Millions in the USA</h2>
        <p>
          We’re serious about security and use cutting-edge technology to ensure your personal information is fully encrypted and securely stored.
        </p>
        <p>
          Robinhood Financial is a member of SIPC, which means securities in your account are protected up to $500,000. For details, please see www.sipc.org.
        </p>
        <p>
          You can also check out Robinhood Financial on FINRA’s BrokerCheck.
        </p>
      </div>
    </section>

    <section className="section-6">
      <div className="text-container">
        <h2>Introducing Robinhood for Web</h2>
          <p>
            The Robinhood you know and love, now on web.
          </p>
          <Link className="button-link" to='/login'>Log In</Link>
      </div>
      <img className="laptop" src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home_redesign/Web_laptop.png"/>
    </section>

    <section className="section-7">
      <video autoPlay loop muted>
          <source src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/options/phone.mp4"/>
      </video>
      <div className="text-container">
        <h2>Introducing Free Options Trading</h2>
          <p>
            Find out how to trade options the Robinhood way. It’s quick, straightforward & free.
          </p>
      </div>
    </section>
  </div>
);

export default Splash;
