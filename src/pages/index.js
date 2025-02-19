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
        <h1 className="neon-heading">Web3 Saga</h1>
        <p className="description">
          Web3-Saga is your all-in-one hub for exploring decentralized technologies, offering a curated collection of resources, tools, and insights to master the web3 ecosystem.
        </p>
        <Link to="/docs/intro" className="cta-button">
          Enter the Portal
        </Link>
      </div>
    </div>
  );
}
