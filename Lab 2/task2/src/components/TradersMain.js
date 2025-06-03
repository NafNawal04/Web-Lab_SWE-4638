import React from 'react';
import Trader from './Trader';

const tradersData = [
  { title: "Raw Spreads", description: "Receive premium pricing from Top Tier financial institutions. Pricing from 10+ financial institutions" },
  { title: "No Dealing Desk", description: "With Consulting You'll get no re-quotes, no dealer intervention and no conflict of interest" },
  { title: "State of the Art", description: "Trade Forex and CFDs with the world's best trading platforms on your desktop or mobile" }
];

function TradersMain() {
  return (
    <section className="why-choose">
      <h2>Why Traders Choose Us</h2>
      <div className="choose-grid">
        {tradersData.map((trader, index) => (
          <Trader key={index} title={trader.title} description={trader.description} />
        ))}
      </div>
    </section>
  );
}

export default TradersMain;