import React from 'react';
import Link from '@docusaurus/Link';
import Lottie from 'lottie-react';
import animationData from '@site/src/animations/wallet.json';

import './index.css';

export default function Home() {
  return (
    <div className="web3-landing">
      <div className="grid-overlay" />
      <div className="content">
        <div className="lottie-container">
          <Lottie animationData={animationData} loop={true} />
        </div>
        <h1 className="neon-heading">Decentralize Everything</h1>
        <p className="description">
          Welcome to the future of blockchain technology and Web3 innovation. Explore decentralized networks,
          smart contracts, and the revolutionary digital economy shaping tomorrow.
        </p>
        <Link to="/docs/intro" className="cta-button">
          Enter the Portal
        </Link>
      </div>
    </div>
  );
}
