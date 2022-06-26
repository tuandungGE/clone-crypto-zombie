import * as React from 'react';

type SocialProps = {
  logo: string;
  name: string;
};

const Socical = (props: SocialProps) => {
  return (
    <div className="flex gap-2 text-white">
      <div>{props.logo}</div>
      <div>{props.name}</div>
    </div>
  );
};

export { Socical };
