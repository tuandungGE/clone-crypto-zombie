import * as React from 'react';

import { Socical } from '@/Components/Social';

const Footer = () => {
  return (
    <div className="h-auto w-full bg-yellow-800 text-white">
      <div className="mx-auto max-w-5xl py-10">
        <div className="text-xl font-medium">Logo</div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-1 space-y-3 ">
            <div>Loom Network</div>
            <div>Basechain - Stake Now</div>
            <div>Loom SDK</div>
            <div>Cryptozombies</div>
            <div>EthFiddle.com</div>
          </div>
          <div className="col-span-1 space-y-3">
            <Socical logo="logo" name="Github" />
            <Socical logo="logo" name="Medium" />
            <Socical logo="logo" name=" Angel.co" />
            <Socical logo="logo" name="Twitter" />
            <Socical logo="logo" name="Telegram" />
            <Socical logo="logo" name="Email" />
          </div>
          <div className="col-span-1 space-y-6 md:col-span-2">
            <div>
              CryptoZombies is a free, open source, interactive code school that
              teaches you to build games on Ethereum. The course is designed for
              beginners to Solidity and starts off with the absolute basics. So
              if you&apos;ve never coded with Solidity before, don&apos;t worry
              — we&apos;ll walk you through step by step.
            </div>
            <div>
              <span className="rounded border-2 border-white py-2 px-6">
                Find out more....
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
