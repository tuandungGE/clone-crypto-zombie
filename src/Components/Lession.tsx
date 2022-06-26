import * as React from 'react';

import { Card } from './Card';

type LessionProps = {
  title: string;
  id: string;
  cards: any[];
};

const Lession = (props: LessionProps) => {
  return (
    <div className="relative mx-auto my-20 max-w-5xl rounded bg-[#132332] px-10 py-20">
      <div className="absolute inset-x-0 -top-8 flex justify-center">
        <div className="rounded  border-4 border-[#282e4a] bg-[#192033] py-2 px-6 text-2xl font-bold text-white">
          {props.title}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">
        {props.cards.map((value, index) => (
          <Card
            key={`card-${props.id}-${index}`}
            id={index + 1}
            title={value.title}
            percent={value.percent}
          />
        ))}
      </div>
    </div>
  );
};

export { Lession };
