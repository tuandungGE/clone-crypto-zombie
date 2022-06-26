import * as React from 'react';

import { Lession } from '@/Components/Lession';
import { Meta } from '@/layouts/Meta';
import { Footer } from '@/templates/Footer';
import { Header } from '@/templates/Header';

const Index = () => {
  // const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const lession_1 = {
    title: 'Solidity Path: Beginner to Intermediate Smart Contracts',
    cards: [
      {
        title: 'Making the Zombie Factory',
        percent: 100,
      },
      {
        title: 'Zombies Attack Their Victims',
        percent: 0,
      },
      {
        title: 'Advanced Solidity Concepts',
        percent: 20,
      },
      {
        title: 'Zombie Battle System',
        percent: 0,
      },
      {
        title: 'ERC721 & Crypto-Collectibles',
        percent: 15,
      },
      {
        title: 'App Front-ends & Web3.js',
        percent: 0,
      },
    ],
  };

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const lession_2 = {
    title: 'Chainlink Path: Decentralized Oracles',
    cards: [
      {
        title: 'Data Feeds and Computation',
        percent: 0,
      },
    ],
  };
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const lession_3 = {
    title: 'Advanced Solidity Path: Get In-depth Knowledge',
    cards: [
      {
        title: 'Testing Smart Contracts with Truffle',
        percent: 0,
      },
      {
        title: 'Deploying DApps with Truffle',
        percent: 0,
      },
      {
        title: 'How to Build an Oracle',
        percent: 0,
      },
      {
        title: 'How to Build an Oracle - Part 2',
        percent: 0,
      },
      {
        title: 'How to Build an Oracle - Part 3',
        percent: 0,
      },
    ],
  };
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const lession_4 = {
    title: 'Beyond Ethereum Path: Explore the Blockchain Ecosystem',
    cards: [
      {
        title: 'Intro to zkSync',
        percent: 0,
      },
      {
        title: 'Advanced zkSync Concepts',
        percent: 0,
      },
    ],
  };
  return (
    <>
      <Meta
        title="Next.js Boilerplate Presentation"
        description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
      />
      <Header />
      <div className="bg-[#21314b] pt-24">
        <div className="mx-auto max-w-5xl">
          <div className="bg-black py-3 text-center text-5xl font-bold text-blue-600">
            THE CURRICULUM
          </div>
        </div>
        <Lession
          cards={lession_1.cards}
          title={lession_1.title}
          id={'lession_1_id'}
          key={`lession_1`}
        />
        <Lession
          cards={lession_2.cards}
          title={lession_2.title}
          id={'lession_2_id'}
          key={`lession_2`}
        />
        <Lession
          cards={lession_3.cards}
          title={lession_3.title}
          key={`lession_3_id`}
          id={'lession_3'}
        />
        <Lession
          cards={lession_4.cards}
          title={lession_4.title}
          key={`lession_4_id`}
          id={'lession_4'}
        />
        <Footer />
      </div>
    </>
  );
};

export default Index;
